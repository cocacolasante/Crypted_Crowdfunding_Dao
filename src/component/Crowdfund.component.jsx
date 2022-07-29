import ProjectCards from './ProjectCards.component'

const Crowdfund = () => {
    return (
        <div>
            <div className='project-header-container' >
                <h1 className='project-header' >Fund Your Project Through DeFi</h1>
                
            </div>
            <div className='project-container' >
                <ProjectCards />
                <ProjectCards />
                <ProjectCards />
                <ProjectCards />
                <ProjectCards />
                <ProjectCards />
                <ProjectCards />
                <ProjectCards />
            </div>
        </div>
    )
}

export default Crowdfund;