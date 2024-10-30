import React, { useState } from 'react';
import { FaThumbsUp, FaReply } from 'react-icons/fa';
import { Image } from '@nextui-org/react';
import { gamer } from '@images'; // Ensure this matches the alias setup

const Comment = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        {
            id: 1,
            user: 'John Doe',
            avatar: gamer.gamer1,
            text: 'What is the best way to learn React?',
            likes: 0,
            replies: [
                {
                    id: 1,
                    user: 'Jane Smith',
                    avatar: gamer.gamer2,
                    text: 'I think the best way is to start with the official documentation and build small projects.',
                    likes: 0
                }
            ]
        },
        {
            id: 2,
            user: 'John saa',
            avatar: gamer.gamer1,
            text: 'What is the best way to learn Angular?',
            likes: 0,
            replies: [
                {
                    id: 1,
                    user: 'Jane Smith',
                    avatar: gamer.gamer2,
                    text: 'I think the best way is to start with the official documentation and build small projects.',
                    likes: 0
                }
            ]
        },
        

    ]);

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments([...comments, {
                id: comments.length + 1,
                user: 'You',
                avatar: gamer.gamer3, // Use another avatar for the user
                text: comment,
                likes: 0,
                replies: []
            }]);
            setComment('');
        }
    };

    const handleLike = (commentId: number, replyId?: number) => {
        setComments(comments.map(comment => {
            if (comment.id === commentId) {
                if (replyId !== undefined) {
                    comment.replies = comment.replies.map(reply => {
                        if (reply.id === replyId) {
                            reply.likes += 1;
                        }
                        return reply;
                    });
                } else {
                    comment.likes += 1;
                }
            }
            return comment;
        }));
    };

    return (
        <div className="flex flex-col bg-backgroundPrimary-color w-full rounded-lg p-10">
            {comments.map(comment => (
                <div key={comment.id} className="mb-4 space-y-4">
                    <div className="flex items-center mb-2 space-x-4">
                        <Image src={comment.avatar.src} alt={comment.user} width={45} height={45} className="rounded-full mr-2" />
                        <h2 className="text-2xl font-bold">{comment.user}</h2>
                    </div>
                    <p className="text-[1.6rem] mb-2">{comment.text}</p>
                    <div className="flex items-center gap-4">
                        <button onClick={() => handleLike(comment.id)} className="flex items-center gap-2">
                            <FaThumbsUp className='text-tertiary-color' /> {comment.likes} Like
                        </button>
                        <button className="flex items-center gap-2">
                            <FaReply className='text-tertiary-color' /> Reply
                        </button>
                    </div>
                    {comment.replies.map(reply => (
                        <div key={reply.id} className="ml-10 py-4">
                            <div className="flex items-center mb-2">
                                <Image src={reply.avatar.src} alt={reply.user} width={38} height={38} className="rounded-full mr-2" />
                                <h3 className="text-2xl font-semibold">{reply.user}</h3>
                            </div>
                            <p className="text-[1.4rem] mb-2">{reply.text}</p>
                            <button onClick={() => handleLike(comment.id, reply.id)} className="flex items-center gap-2 ">
                                <FaThumbsUp className='text-tertiary-color' /> {reply.likes} Like
                            </button>
                        </div>
                    ))}
                </div>
            ))}
            <div className="flex flex-col mt-4">
                <textarea
                    className="h-[100px] p-2 border border-gray-300 rounded-md"
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                <button
                    className="mt-2 p-2 bg-tertiary-color text-[1.2rem] text-white rounded-md"
                    onClick={handleCommentSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Comment;
