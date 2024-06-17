import { defineStore } from "pinia"
import { $axios } from "../config/axios"

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        setUser(user) {
            this.user = user
        },
        async getDataByToken(token) {
            try {
                const { data } = await $axios.get('/login/verify', {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                this.setUser(data)
            } catch (e) {
                this.setUser(null)
            }
        }
    },
})