import './stories.scss';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext"

const Stories = () => {

	const {currentUser} = useContext(AuthContext)

	//TEMPORARY DATA
	const stories = [
		{
			id:1,
			name:"Dave Ruby",
			img:"",
		},
		{
			id:2,
			name:"Emet Ruby",
			img:"",
		},
		{
			id:3,
			name:"Dave Doe",
			img:"",
		},
		{
			id:4,
			name:"Jane Ruby",
			img:"",
		},
	];	 
	return (
		<div className="stories">
			<div className="story">
				<img src={currentUser.profilePic} alt="" />
				<span>{currentUser.name}</span>
				<button>+</button>
			</div>
			{stories.map(story=>(
				<div className="story" key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	)
}

export default Stories