import React from 'react'

export function StoryList({ stories }) {
    if (!stories) return <div>Loading...</div>
    return (
        <div>{
            stories.map(story => {
                return (
                    <section className='story-perview'>
                        <img src={story.by.imgUrl} alt="" />
                        <span>{story.by.username}</span>
                    </section>

                )
            })
        }
        </div>
    )
}
