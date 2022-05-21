import React from 'react'

export function StoryList({ stories }) {
    if (!stories) return <div>Loading...</div>
    return (
        <section className='story-list'>{
            stories.map(story => {
                return (
                    <section className='story-perview' key={story._id}>
                        <div className='is-shown-border'>
                        <img className='img-larg' src={story.by.imgUrl} alt="" />
                        </div>
                        <span>{story.by.username}</span>
                    </section>

                )
            })
        }
        </section>
    )
}
