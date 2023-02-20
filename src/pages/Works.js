import Work from '../components/Work'

const works =  [
    {
        "id": "1",
        "title": "IP Address Tracker", 
        "image": "/images/IPAddressTracker.png", 
        "latestWork": true, 
        "skills": [
            "html", "css", "javascript", "api"
        ],
        "github": "https://github.com/phoebeltc/09_ip-address-tracker-master", 
        "link": "https://09-ip-address-tracker-master.vercel.app/"
    },
    {
        "id": "2",
        "title": "Expenses Chart", 
        "image": "/images/ExpensesChart.png", 
        "latestWork": false, 
        "skills": [
            "html", "css", "javascript"
        ],
        "github": "https://github.com/phoebeltc/04_expenses-chart-component-main", 
        "link": "https://04-expenses-chart-component-main.vercel.app/"
    }, 
    {
        "id": "3",
        "title": "AngelFace", 
        "image": "/images/AngelFace.png", 
        "latestWork": false, 
        "skills": [
            "UI design", "Wireframing", "Photoshop"
        ],
        "github": false,
        "link": "https://www.angelface.com.hk/"
    }
]

const Works = () => {
    return <>
    <div className="frame-works">
        {works.map((
            {title, image, latestWork, skills, github, link}, index
        ) => {
            return (
                <Work
                    title={title}
                    image={image}
                    latestWork={latestWork}
                    skills={skills}
                    github={github}
                    link={link}
                    key={index}
                />
            )
        })

        }
    </div> 
    </>
}

export default Works;
