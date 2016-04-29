import React from 'react';

class Blog extends React.Component {
    render(){
        return (
            <div className="article">
                <h1>A Theory of Constraints</h1>
                <h2>Artificial Intelligence and safety in design.</h2>
                <div className="author">Neel Doppalapudi</div>
                <p>
                    The following is a thought experiment on a higher order design principle to guide AI development:
                </p>
                <p>
                    To set the context of this discussion, I am defining AI as an artificial system that can make a decision using a logic that is not explicitly programmed into the system.
                </p>
                <p>
                    Under that premise, AI exists today.
                </p>
                <p>
                    Machine learning, as it’s called, has been shunned by pundits as statistics masquerading as real intelligence. Forward chaining and neural networks are digestible, logical algorithms that share very little with nuanced randomness of the human mind.
                </p>
                <p>
                    Incremental improvements in machine learning are currently manifesting themselves as driverless cars, Jeopardy! playing supercomputers, and virtual assistants. These innovations are changing the way humans interact with the environment in material ways; though they still don’t represent the general intelligence machines promised by sci-fi authors for almost a century.
                </p>
                <p>
                    Those super-machines are fundamentally different. They take inspiration from the brain, more specifically, from human consciousness. They are meant to be unpredictable. They evolve and learn, create and imply.
                </p>
                <p>
                    And, they are extraordinarily dangerous.
                </p>
                <p>
                    Recently, notable figures in the technology community have signed an <a href="http://futureoflife.org/AI/open_letter">open letter advocating for AI safety</a> . While this is an important first step in raising awareness of the inevitability of this issue, it does little to set bounds on the development of these technologies.
                </p>
                <p>
                    So, in order to progress beyond discussion, I propose that a baseline for the development of AI legislation be in the regulation of constraint design.
                </p>
                <p>
                    My rationale is as follows:
                </p>
                <p>
                    Whether it be “general” or “narrow” AI, constraints are central to function. Narrow intelligence; the kind found in “Watson”, has very specific constraints. It can only pull from predefined libraries that correlate directly to a limited goal. It is task oriented, and can improve its model by studying feedback on a linear optimization function or a probability matrix.
                </p>
                <p>
                    General intelligence, on the other hand, attempts to encapsulate as much of the universe into its model as possible. Instead of being task oriented, this machine is reinforcement oriented: it can apply itself to any task with equal success given a digestible input function. Constraints in this machine are meant to give the program freedom to explore. Evolution is encouraged, and as such there is limited control over how and why the program iterates over a dataset.
                </p>
                <p>
                    It is clear based on this distinction that there is significantly more danger in general intelligence than narrow intelligence. The source of the danger is in the ability of generalized AI programs to freely interpret large datasets, then act upon them without any oversight from human observers. Narrow intelligence does not have this risk.
                </p>
                <p>
                    Narrow intelligence is entirely within human control. There is no risk of the program developing logic that was not explicitly defined by the decision function. The program can be limited in its outputs, specifically modified to eliminate contingencies, and set towards a particular focus. Any risk associated is one of human error.
                </p>
                <p>
                    General intelligence may very well benefit us in unimaginable ways. Being able to find solutions outside the realm of human capability has the upside of generating extraordinarily efficient solutions to some of our biggest problems. However, there is a distinction between augmenting human intelligence and replacing it. It is in replacing humans that AI poses the greatest moral and safety risk.
                </p>
                <p>
                    So, I believe the safest way to proceed with the development of intelligent software structures is to develop a clear set of mandated constraints that must be strictly adhered to by any AI. Safety code must be included in the programming of all types of AI that have loop-hole proof restrictions outlining general technical safety measures.
                </p>
                <p>
                    This is far from a panacea to what is inevitably going to become a generation defining issue, but it is something tangible that we, today can implement and refine to begin to guard against some of the dangers of AI.
                </p>
                <p>
                    Artificial intelligence has the power to exponentially accelerate the progress of the human race. While it seems far away now, the pace of technology has proven that the impossible can become possible in the blink of an eye. It is with that in mind that we must begin to take seriously the dangers of allowing AI to freely explore our world. If knowledge is power, then omnipresence rules over all.
                </p>
            </div>
        )
    }
}

export default Blog;