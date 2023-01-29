import React from "react";
import { Link } from 'react-router-dom';
import './Insights.css';
import Insight from "./Insight";

function Insights(props){
    return (
        <div>
        <div className='insights'>
            <div className='page-title'>
                Insights
            </div>
            <div>
                <Insight hed="Emotional Outcomes" text="Refugee advocates have to interface with overworked and backlogged social services/government agencies, which leads to a lack of faith in the existing systems, but regardless of this frustration they find fulfillment by forging connections with refugees and appreciating huge breakthroughs as well as minor successes."/>
                <Insight hed="Communicating across barriers" text="Advocates and refugees need to communicate to understand the refugees needs, how the advocate will act to help and for human connection. But cultural differences and language barriers can get in the way." />
            </div>
            
        </div>
            <div className = 'insights'>
                <div className='page-title'>Reflection</div>
                <div className = "body">
                One of our interviews was with a social services coordinator at a large non-profit. Before, we had only interviewed volunteers, and the tenor of her interview was really different. Until we tried to probe deeper, she really just wanted to talk about the technical processes that are part of her work and the greater system. She was young, just out of college, and even though her mannerisms were casual and she was zooming from her bedroom she didn’t really let her guard down in the same way as our other interviewees. When we asked her about her daily frustrations she deflected by saying that the attorneys deal with more than her. But once we asked even more directly about her “why”, she came up with an interesting answer. She said that she’s always been interested in the idea of “home”. She said she was really interested in questions like, “what is a home? How do we make a home? And why is a home legally defined as the place you're born?" Unlike other “whys” we’d heard, this was much more intellectual compared to a guttural emotion. I think that this answer revealed a lot about her perspective and values as an advocate. What about “home” was so powerful that it motivates her to do a job that is more emotionally taxing and pays less than other possible jobs? Whether they are finding a home and creating community for themselves in their advocacy of helping other people find a home, cultivating belonging is at the heart of refugee advocacy. It also represents the emotional barriers she constructed to protect herself during this challenging work. Her response also stood in opposition to her frustrations. So as a designer concerned with the pain points in the lives of refugee advocates, it also represents a possibility. 
                <br/> < br/>
                This experience stood out in particular because it was so different from what I was expecting. Honing in on unexpected answers and trying to make sense of them can help you as a designer identify key contradictions and deeper motivations. This could be because, for example, their answer represents a distinction between how they think about their work and their work or a misconception people hold. At first, I knocked her answer for feeling stiff and like she was emotionally detached from the work compared to other advocates, especially given how intimately she works with them. But just because her response was different from what I expected doesn’t mean that it is an anomaly or unhelpful. Actually it is more helpful; if our interviews only confirmed my expectations, the project would be incredibly boring. So, going forward, I think that honing in on these unexpected and contradictory answers would make reveal opportunities in the brainstorming phase of the project. Perhaps we can design to help advocate find “home” in their work even if they aren’t working in a direct community with refugees. To put it succinctly, probe a little deeper and when you get a weird unexpected answer, take a closer look because it will probably show you something interesting you hadn’t considered before.
                </div>
            </div>
        </div>
    )
}

export default Insights;