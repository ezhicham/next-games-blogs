import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./trendgames.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TrendGames() {
  const games = [
    { name: ' dota',gamelogo:"https://i.pinimg.com/564x/48/d3/53/48d353ca65b6b305a33abb4b1a7f1d78.jpg", type: 'console/pc', views: 15212.200 },
    { name: ' gta 5',gamelogo:"https://i.pinimg.com/564x/15/21/93/152193e7fb23dcf3d509db59e6dfc3a0.jpg", type: 'mobile', views: 23.211200 },
    { name: 'league of legend',gamelogo:"https://i.pinimg.com/564x/e0/43/66/e04366f3cb9ddb76d3b8d7ce26775b8f.jpg", type: 'console/pc', views: 902.2220 },
    { name: 'valorant',gamelogo:"https://i.pinimg.com/564x/bf/f0/8a/bff08ad47ae648e775598f70d8bcd919.jpg", type: 'console/pc', views: 132.23500 },
    { name: 'assassin creed',gamelogo:"https://i.pinimg.com/564x/4e/71/03/4e7103f880d456f26b6802844888dc43.jpg", type: 'mobile', views: 1.230210 },
    { name: 'efotbal 2025',gamelogo:"https://i.pinimg.com/564x/96/39/41/963941277de4cd7b1532def736e1fe61.jpg", type: 'console/pc', views: 123.20931 },
    { name: ' fifa 2025',gamelogo:"https://i.pinimg.com/564x/7d/fb/3e/7dfb3e9837ad13886f398b78b8ce232e.jpg", type: 'console/pc', views: 15.2221200 },
    { name: ' valorant',gamelogo:"https://i.pinimg.com/564x/48/d3/53/48d353ca65b6b305a33abb4b1a7f1d78.jpg", type: 'mobile', views: 23.121200 },
    { name: 'league of legend',gamelogo:"https://i.pinimg.com/564x/48/d3/53/48d353ca65b6b305a33abb4b1a7f1d78.jpg", type: 'console/pc', views: 434.94384 },
  
  ];
  return (
    <section className='trend-section'>
      <div className="title"><h2>trend games now </h2></div>

      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
         <th style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>#</th>
          <th style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>Name</th>
          <th style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>Type</th>
          <th style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>Views</th>
          <th style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>install</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#0d111384' : '#1a1a20' }}>
          <td style={{ padding: '10px' }}>{index}</td>
            <td className="game-name" style={{ padding: '10px' }}> <img src={game.gamelogo} width={"20"} alt="" />  <p>{game.name}</p> </td>
            <td className={`${game.type=="console/pc" ? "text-violet-400" : "text-red-400"  }`} style={{ padding: '10px' ,  }}>{game.type}</td>
            <td className="text-violet-200" style={{ padding: '10px' }}>{game.views}  </td>
            <td className="text-green-600" style={{ padding: '10px' }}> <FontAwesomeIcon width={"15"} icon={faDownload} /> </td>
          </tr>
        ))}
      </tbody>
    </table>

    </section>
  )
}

export default TrendGames
