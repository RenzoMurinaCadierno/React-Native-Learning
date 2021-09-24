const initialState = {
  category: { id: null },
  section: {
    id: null,
    category: "",
    title: "",
    subtitle: "",
    color: "",
    bullets: [],
    urls: ""
  }
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
