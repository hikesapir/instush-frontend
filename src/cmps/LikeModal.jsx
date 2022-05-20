import React from 'react'

export const LikeModal = (likedByList) => {
    return (
        <section className='like-modal'>
            <header>LikeModal</header>
            <ul>
                {likedByList.map(likedBy => {
                    return (
                        <li>
                            <div className='user-preview'>
                                <img src="likedBy.imgUrl" alt="" />
                                <div>
                                    <p className='bold'>{likedBy.username}</p>
                                    <p>{likedBy.fullname}</p>
                                </div>
                            </div>
                            <button>Follow</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
