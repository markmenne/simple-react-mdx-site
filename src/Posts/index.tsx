import React, { memo } from 'react';
import { buildLinkFromName } from '../PostLoader/postHelper';
import { POST_ITEMS } from '../PostLoader/PostsConfig';
import './Posts.css'

const Posts = () => {

    return (
        <div className="posts-overview">
            <h2 className="heading">All Articles</h2>
            <div className="posts">

                {
                    POST_ITEMS.map((postItem) => {
                        return <div>
                            {buildLinkFromName(postItem.name)} ({postItem.updatedDate.toLocaleDateString()})
                        </div>
                    })

                }
            </div>
        </div>
    );
}

export default memo(Posts);
