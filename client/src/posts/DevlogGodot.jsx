import React from 'react';

const DevlogGodot = () => {
  return (
    <div className="blog-post-content">
      {/* Intro section */}
      <div className="blog-intro">
        "It was a difficult decision, but a necessary one. After years of working with Unity, 
        we realized that true freedom comes from open source."
      </div>

      <h3>1. The Challenge</h3>
      <p>
        Migrating <strong>50GB of assets</strong> wasn't easy. It felt like moving a castle brick by brick. We had to tackle three main pillars:
      </p>
      
      <ul className="tech-list">
        <li>Rewrite our custom <strong>Shader Graph</strong> from scratch.</li>
        <li>Adapt physics calculations (Switching from PhysX to Jolt).</li>
        <li>Retrain the entire art team on the <strong>GDScript</strong> workflow.</li>
      </ul>

      {/* Image with wrapper for styling */}
      <div className="blog-img-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200" 
          alt="Godot Editor Interface" 
          className="blog-img"
        />
        <div className="img-caption">Figure 1: Our new node structure inside Godot 4.2</div>
      </div>

      <h3>2. Why GDScript?</h3>
      <p>
        At first, we missed C#. But GDScript is surprisingly fast for prototyping gameplay logic.
        It integrates deeply with the engine API. Here is a snippet of our player movement controller:
      </p>

      {/* Custom Code Block Window */}
      <div className="code-window">
        <div className="code-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="filename">player_controller.gd</span>
        </div>
        <pre className="code-content">
<code>
<span className="kw">func</span> <span className="func">_physics_process</span>(delta):
    <span className="kw">var</span> input_dir = <span className="kw">Input</span>.<span className="func">get_vector</span>(<span className="str">"ui_left"</span>, <span className="str">"ui_right"</span>, <span className="str">"ui_up"</span>, <span className="str">"ui_down"</span>)
    velocity = input_dir * <span className="num">300.0</span>
    
    <span className="kw">if</span> input_dir:
        <span className="func">play_anim</span>(<span className="str">"run"</span>)
    <span className="kw">else</span>:
        <span className="func">play_anim</span>(<span className="str">"idle"</span>)
        
    <span className="func">move_and_slide</span>()
</code>
        </pre>
      </div>

      <h3>3. Conclusion</h3>
      <p>
        Our build times dropped by <strong>40%</strong>. The node system allows for a modularity we never achieved before. Best decision ever.
      </p>
    </div>
  );
};

export default DevlogGodot;