import parkpass from '../assets/parkpass.png'
import wandr from '../assets/wandr.png';
import trivia from '../assets/trivia.png';
import reads from '../assets/reads.png'


export const projects = [
	{
		title: 'Trivia',
		description:
			'A fun api-configured web app to test a users knowledge in ten different categories. Trivia is a frontend only game that tests users knowledge about a topic of their choice with ten multiple choice questions.Current categories are: General Knowledge, Celebrities, Entertainment: Books, Entertainment: Films, Entertainment: Japanese Anime and Manga, Animals, Sports, Science: Computers. Users can also select level of difficulty: Easy, Medium, Hard. The game will keep track of the users score and let them know how many they got correct at the end of a round.',
		image:(<img className='site-img' src={trivia}></img>),
		link: 'https://sahirabibi.github.io/trivia-web-app/',
		stacks: ['Javascript', 'HTML', 'CSS'],
	},
	{
		title: 'Reads',
		description:
			'Reads allows users to browse NYT Best Sellers, along with thousands of other titles, and add them to their own reading list. Users can track their progress through Bookmarks and add reviews and ratings. Users can also search the Open Library Database for additional titles to add to their list.',
		image: <img className='site-img' src={reads}></img>,
		link: 'https://readsnreads.netlify.app/',
		stacks: ['Javascript', 'HTML', 'CSS', 'React'],
	},
	{
		title: 'ParkPass',
		description:
			'An app that allows users to browse national parks within the US and learn more about them. Users can save parks to their own profiles. Users can use the site to track parks they have been to or set exciting goals for future adventures! The app is built in hopes of encouraging users to appreciate and explore the natural world around them.',
		image: <img className='site-img' src={parkpass}></img>,
		link: 'https://parkpassadventure.netlify.app/',
		stacks: [
			'Javascript',
			'HTML',
			'CSS',
			'React',
			'MongoDB',
			'Express',
			'PostgresSQL',
		],
	},
	{
		title: 'Wandr',
		description:
			'Wandr is a social app allowing users to find new events in their area by either using keywords or browsing genres. Users can navigate to the Discover page to find events in their area. Users can save events to their Bucketlist, view upcoming saved events in their Timeline, and upload and save photos to Memories to track all their exciting experiences.',
		image: <img className='site-img' src={wandr}></img>,
		link: 'https://wandr.netlify.app/',
		stacks: ['Javascript', 'HTML', 'CSS', 'React', 'Django', 'Python', 'AWS'],
	},
];