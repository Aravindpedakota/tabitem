import { Component } from 'react'
import Header from './components/Header'
import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import './App.css'


const tabList=[
  {tabId:'STATIC', displayText:'Static'},
  {tabId:"RESPONSIVE", displayText:'Responsive'},
  {tabId:"DYNAMIC", displayText:'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]


class App extends Component{
  state={activeTabId: tabList[0].tabId}

  clickTabItem=(tabId)=>{
    this.setState({activeTabId:tabId})
  }

  getFilteredProjetcs=()=>{
    const {activeTabId}= this.state
    const filteredProjects= projectsList.filter(eachProject => eachProject.category === activeTabId)
    return filteredProjects
  }

  render(){
    const filteredProjects= this.getFilteredProjetcs()
      return(
    <div>
      
      <Header/>
      <h1 className='heading'>My Projects</h1>
      <ul className='tab-content'>{tabList.map(eachItem => <TabItem tabDetails={eachItem} key={eachItem.tabId} clickTabItem={this.clickTabItem}/>)}</ul>
      <ul className='project-content'>{filteredProjects.map(eachItem => <ProjectItem projectDetails ={eachItem} key={eachItem.projectId}/>)}</ul>
    </div>
  )
  }
}

export default App