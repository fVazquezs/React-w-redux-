import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui contanier comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					date="Today at 4:45PM"
					text="My name is sam"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Fernando"
					date="Today at 3:00AM"
					text="My name is fernando"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Julia"
					date="Yesterday at 8:00PM" 
					text="My name is julia"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'))