import './posts.scss';
import Post from "../post/Post";

const Posts = () => {

	//TEMPORARY DATA
	const posts = [
		{
			id:1,
			name:"Dave Ruby",
			userId:1,
			profilePic:"",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
			img: " ",
		},
		{
			id:2,
			name:"Emet Ruby",
			userId:2,
			profilePic:"",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		},
		{
			id:3,
			name:"Dave Doe",
			userId:3,
			profilePic:"",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
			img:"",
		},
	];	 

	return (
		<div className="posts">
		{posts.map(post=>(
			<Post post={post} key={post.id}/>
			))}
		</div>
	)
}

export default Posts;