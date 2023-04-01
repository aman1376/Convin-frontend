import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
    buckets: [
        {
            id: nanoid(),
            name: "Entertainment Videos",
            cards: [
                {
                    id: nanoid(),
                    title: "Stand-up",
                    link: "https://www.youtube.com/embed/R5MGusrjK1Q"
                },
                {
                    id: nanoid(),
                    title: "Holi",
                    link: "https://www.youtube.com/embed/_MZt0WBxD40"
                }

            ]
        },
        {
            id: nanoid(),
            name: "Educational Videos",
            cards: [
                {
                    id: nanoid(),
                    title: "React",
                    link: "https://www.youtube.com/embed/UVhIMwHDS7k"
                },
                {
                    id: nanoid(),
                    title: "Git",
                    link: "https://www.youtube.com/embed/apGV9Kg7ics"
                }
            ]
        },
        {
            id: nanoid(),
            name: "Sports Videos",
            cards: [
                {
                    id: nanoid(),
                    title: "Chess",
                    link: "https://www.youtube.com/embed/6-P35Ovdzck"
                }
            ]
        }

    ],
}

export const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        editBucketName: {
            reducer(state, action) {
                const { editedName, id } = action.payload
                const foundBucket = state.buckets.find(bucket => bucket.id === id)
                if (foundBucket) {
                    foundBucket.name = editedName
                }
            }
        },
        deleteBucket: {
            reducer(state, action) {
                const { index } = action.payload
                state.buckets.splice(index, 1);
            }
        },
        addBucket: {
            reducer(state, action) {
                state.buckets.unshift({
                    name: " ",
                    id: nanoid(),
                    cards: [],
                    initialEdit: true,
                })
            }
        },
        addCard: {
            reducer(state, action) {
                const { bucketIndex, title, link } = action.payload;
                const newCard = {
                    id: nanoid(),
                    title,
                    link,
                }

                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                foundBucket.cards.unshift(newCard)
            }
        },
        updateCard: {
            reducer(state, action) {
                const { title, link, bucketIndex, cardIndex } = action.payload
                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                const foundCard = foundBucket.cards[cardIndex]
                foundCard.title = title;
                foundCard.link = link;
            }
        },
        deleteCard: {
            reducer(state, action) {
                const { bucketIndex, cardIndex } = action.payload
                console.log(action.payload, "Delete");
                state.buckets[bucketIndex].cards.splice(cardIndex, 1);
            }
        },
        toggleInitialEditValue: {
            reducer(state, action) {
                const { index } = action.payload
                const val = state.buckets[index].initialEdit
                if (val !== undefined) {
                    state.buckets[index].initialEdit = false;
                }
            }
        }
    }
})

export const allBuckets = (state) => state.buckets.buckets
export const { editBucketName, addCard, updateCard, deleteBucket, addBucket, deleteCard, toggleInitialEditValue } = bucketSlice.actions

export default bucketSlice.reducer