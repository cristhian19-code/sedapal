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
        signOut() {
            localStorage.clear()
            this.setUser(null)
        },
        async getDataByToken(token) {
            if (!token) {
                localStorage.clear()
                this.setUser(null)
                return
            }
            try {
                const { data } = await $axios.get('/login/verify', {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                this.setUser(data)
            } catch (e) {
                localStorage.clear()
                this.setUser(null)
            }
        }
    },
})