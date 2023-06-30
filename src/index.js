import './style.css';
import { ProjectList } from './projectList';
import { InboxList } from './inboxList';
import { PageLoader } from './pageLoader';

const projectList = new ProjectList();
const inboxList = new InboxList();

projectList.addProject('Project 1');
projectList.addProject('Project 2');

inboxList.addTask('Task 1');
inboxList.addTask('Task 2');

const pageLoader = new PageLoader(projectList, inboxList);
pageLoader.loadInitialData();