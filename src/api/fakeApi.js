const KEY = "users";

const get = () => JSON.parse(localStorage.getItem(KEY)) || [];
const set = (data) => localStorage.setItem(KEY, JSON.stringify(data));

export const fakeApi = {
  login: async (email, password) => {
    if (email === "admin@gmail.com" && password === "1234") {
      return { token: "token", user: { name: "Admin" } };
    }
    throw new Error("Xato login");
  },

  getUsers: async () => get(),

  createUser: async (user) => {
    const data = get();
    const newUser = { ...user, id: Date.now() };
    set([...data, newUser]);
  },

  updateUser: async (id, updated) => {
    const data = get().map(u => u.id === id ? { ...u, ...updated } : u);
    set(data);
  },

  deleteUser: async (id) => {
    const data = get().filter(u => u.id !== id);
    set(data);
  }
};