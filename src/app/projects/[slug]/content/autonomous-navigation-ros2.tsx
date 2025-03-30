export default function AutonomousNavigationContent() {
    return (
      <article className="prose mx-auto">
        <h2>Autonomous Navigation for Cars (ROS 2)</h2>
        
        <p>
          Developed a robust 2D SLAM solution integrating camera, IMU, and GPS data for real-time autonomous navigation. 
          This project involved detailed sensor fusion algorithms and was successfully tested in urban scenarios.
        </p>
  
        <img src="/images/projects/ros2-navigation.png" alt="ROS 2 Navigation screenshot" />
  
        <h3>Technical details:</h3>
        <ul>
          <li>Used ROS 2 Galactic distribution.</li>
          <li>Sensor integration: camera (Bird's-eye view), IMU, GPS.</li>
          <li>Real-time localization with Kalman filtering.</li>
        </ul>
  
        <p>Further interactive demos and videos coming soon!</p>
      
      
      
      </article>
    );
  }
  