import { defineStore } from "pinia";

export const useTypesStore = defineStore('Types', {
    state: () => ({
        _types: [
            {
                type: "normal",
                advantages: ["None"],
                disadvantages: ["Fighting"],
                immune: ["Ghost"]
            },
            {
                type: "fire",
                advantages: ["Grass", "Ice", "Bug", "Steel"],
                disadvantages: ["Water", "Rock", "Dragon"],
                immune: ["None"]
            },
            {
                type: "water",
                advantages: ["Fire", "Rock", "Steel"],
                disadvantages: ["Grass", "Electric"],
                immune: ["None"]
            },
            {
                type: "grass",
                advantages: ["Water", "Ground", "Rock"],
                disadvantages: ["Fire", "Flying", "Poison", "Bug", "Ice"],
                immune: ["None"]
            },
            {
                type: "electric",
                advantages: ["Water", "Flying"],
                disadvantages: ["Ground", "Dragon", "Grass"],
                immune: ["None"]
            },
            {
                type: "ice",
                advantages: ["Dragon", "Flying", "Grass", "Ground"],
                disadvantages: ["Fire", "Fighting", "Rock", "Steel"],
                immune: ["None"]
            },
            {
                type: "fighting",
                advantages: ["Normal", "Rock", "Steel", "Ice", "Dark"],
                disadvantages: ["Flying", "Psychic", "Fairy"],
                immune: ["Ghost"]
            },
            {
                type: "flying",
                advantages: ["Grass", "Fighting", "Bug"],
                disadvantages: ["Electric", "Ice", "Rock"],
                immune: ["None"]
            },
            {
                type: "poison",
                advantages: ["Fairy", "Grass"],
                disadvantages: ["Ground", "Psychic"],
                immune: ["None"]
            },
            {
                type: "ground",
                advantages: ["Fire", "Electric", "Poison", "Rock", "Steel"],
                disadvantages: ["Water", "Grass", "Ice"],
                immune: ["Electric"]
            },
            {
                type: "psychic",
                advantages: ["Fighting", "Poison"],
                disadvantages: ["Bug", "Ghost", "Dark"],
                immune: ["Ghost"]
            },
            {
                type: "bug",
                advantages: ["Grass", "Psychic", "Dark"],
                disadvantages: ["Fire", "Flying", "Steel"],
                immune: ["None"]
            },
            {
                type: "rock",
                advantages: ["Fire", "Ice", "Flying", "Bug"],
                disadvantages: ["Water", "Grass", "Fighting", "Ground", "Steel"],
                immune: ["None"]
            },
            {
                type: "ghost",
                advantages: ["Ghost", "Psychic"],
                disadvantages: ["Normal", "Dark"],
                immune: ["Normal", "Fighting"]
            },
            {
                type: "steel",
                advantages: ["Fairy", "Ice", "Rock"],
                disadvantages: ["Fire", "Fighting", "Ground"],
                immune: ["Poison"]
            },
            {
                type: "fairy",
                advantages: ["Fighting", "Dragon", "Dark"],
                disadvantages: ["Poison", "Steel"],
                immune: ["Dragon"]
            },
            {
                type: "dragon",
                advantages: ["Dragon"],
                disadvantages: ["Ice", "Dragon", "Fairy"],
                immune: ["Fairy"]
            },
            {
                type: "dark",
                advantages: ["Ghost", "Psychic"],
                disadvantages: ["Fighting", "Bug", "Fairy"],
                immune: ["Psychic"]
            },
            {
                type: "none"
            }
        ],
        _selected_type: '',
        _advantages: [],
        _disadvantages: [],

        _errors: {
            advantages: [],
            disadvantages: [],
        },

        _perfect: {
            advantages: false,
            disadvantages: false,
        },

        _answered: false,
    }),

    actions: {
        GetRandomType() {
            var random_number = Math.floor((Math.random() * (this._types.length - 1)))

            while (random_number < 0) {
                random_number = Math.floor((Math.random() * (this._types.length - 1)))
            }

            this._selected_type = this._types[random_number]
        },

        ReturnList(which) {
            switch (which) {
                case 'advantages':
                    return this._advantages
                case 'disadvantages':
                    return this._disadvantages
            }
        },

        SelectType(type, which) {
            var str = type
            type = str.charAt(0).toUpperCase() + str.slice(1);

            switch (which) {
                case 'advantages':

                    if (this.VerifyIfSelected(type, which)) {
                        this.RemoveType(type, which);

                        return
                    }
                    this._advantages.push(type);

                    break
                case 'disadvantages':

                    if (this.VerifyIfSelected(type, which)) {
                        this.RemoveType(type, which);

                        return
                    }
                    this._disadvantages.push(type);

                    break
            }
        },

        RemoveType(type, which) {
            switch (which) {
                case 'advantages':

                    if (type) {
                        let index = this._advantages.indexOf(type);

                        this._advantages.splice(index, 1);
                    }

                    break
                case 'disadvantages':

                    if (type) {
                        let index = this._disadvantages.indexOf(type);

                        this._disadvantages.splice(index, 1);
                    }

                    break
            }
        },

        VerifyIfSelected(type, which) {
            switch (which) {
                case 'advantages':

                    if (type) {
                        let index = this._advantages.indexOf(type);

                        if (index >= 0) {
                            return true;
                        }

                        return false
                    }

                    break
                case 'disadvantages':
                    if (type) {
                        let index = this._disadvantages.indexOf(type);

                        if (index >= 0) {
                            return true;
                        }

                        return false
                    }
                    break
            }
        },

        GetActiveClass(type, which) {
            var str = type
            type = str.charAt(0).toUpperCase() + str.slice(1);

            switch (which) {
                case 'advantages':
                    if (type) {
                        let index = this._advantages.indexOf(type);

                        if (index >= 0) {
                            return type;
                        }
                    }

                    break
                case 'disadvantages':
                    if (type) {
                        let index = this._disadvantages.indexOf(type);

                        if (index >= 0) {
                            return type;
                        }
                    }
                    break
            }
        },

        SubmitTypes() {
            if (this._advantages.length < 1 || this._disadvantages.length < 1) {
                window.alert('Selecione pelo menos um item')
                return
            }

            this.VerifyAdvantages();
            this.VerifyDisadvantages();

            this._answered = true;
        },

        VerifyDisadvantages() {
            if (this._selected_type) {
                let intersection = this._selected_type.disadvantages.filter(x => this._disadvantages.includes(x));
                let difference = this._disadvantages.filter(x => !this._selected_type.disadvantages.includes(x));

                if (intersection.length >= 1) {
                    if (JSON.stringify(this._selected_type.disadvantages) === JSON.stringify(this._disadvantages)) {
                        this._perfect.disadvantages = true;
                    }
                }

                if (difference.length >= 1) {
                    this._errors.disadvantages = []
                    this._errors.disadvantages.push(difference)
                }
            }
        },

        VerifyAdvantages() {
            if (this._selected_type) {
                let intersection = this._selected_type.advantages.filter(x => this._advantages.includes(x));
                let difference = this._advantages.filter(x => !this._selected_type.advantages.includes(x));

                if (intersection.length >= 1) {
                    if (JSON.stringify(this._selected_type.advantages) === JSON.stringify(this._advantages)) {
                        this._perfect.advantages = true;
                    }
                }

                if (difference.length >= 1) {
                    this._errors.advantages = []
                    this._errors.advantages.push(difference)
                }
            }
        },

        Reset() {
            this.GetRandomType();
            this._answered = false;
            this._errors.advantages = [];
            this._errors.disadvantages = [];
            this._advantages = [];
            this._disadvantages = [];
            this._perfect.advantages = false;
            this._perfect.disadvantages = false;
        }
    },

    getters: {
        types: (state) => {
            return state._types
        },
        selected_type: (state) => {
            return state._selected_type
        },
        advantages: (state) => {
            return state._advantages
        },
        disadvantages: (state) => {
            return state._disadvantages
        },
        answered: (state) => {
            return state._answered
        },
        errors: (state) => {
            return state._errors
        },
        perfect: (state) => {
            return state._perfect
        }
    }
})

// import { useUtilsStore } from "/stores/Utils.js";
// const utilsStore = useUtilsStore();