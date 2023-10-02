import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'


Vue.component('loader', {
    template:
        `
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `
})
new Vue({
    el: '#app',
    data: () => ({
        form: {
            name: '',
            value: '',
            marked: false,
        },
        loading: true,
        contacts: []
    }),
    methods: {
        async createContact() {
            const {...contact} = this.form
            const newContact = await request('/api/contacts', 'POST', contact)
            this.contacts.push(newContact)
            this.form.name = this.form.value = ''
        },
       async markContact(id) {
           const contact = this.contacts.find(c => c.id === id)

           const updated = await request(`/api/contacts/${id}`, 'PUT', {
               ...contact,
               marked: true,
           })
           console.log(updated)
            contact.marked = updated.marked
        },
       async deleteContact(id) {
         await  request(`/api/contacts/${id}`, 'DELETE')
            this.contacts =  this.contacts.filter(c => c.id !== id)

        },
    },
    computed: {
        canCreate() {
            return this.form.value && this.form.name.trim()
        }
    },
    async mounted() {
        this.contacts = await request('/api/contacts')
        this.loading = false
    },
})

async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body
        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }
        const response = await fetch(url, {
            method,
            headers,
            body,
        })
        return await response.json()
    } catch (e) {
        console.warn('Error:', e.message)
    }
}