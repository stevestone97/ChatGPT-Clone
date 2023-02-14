import React from "react";
import "../App.css";

export default function ModelDescrption({ model, tempreture, maxTokens }) {

    if (model == "text-davinci-003") {
        return (
            <div>
                <h3>- text-davinci-003 -</h3>
                <br />
                <p>Most capable GPT-3 model.</p>
                <p>Can do any task the other models can do, often with higher quality.</p>
                <p>Also supports inserting completions within text.</p>
            </div>
        )
    } else if (model == "text-curie-001") {
        return (
            <div>
                <h3>- text-curie-001 -</h3>
                <br />
                <p>Very capable, but faster and lower cost than Davinci.</p>
            </div>
        )
    } else if (model == "text-babbage-001") {
        return (
            <div>
                <h3>- text-babbage-001 -</h3>
                <br />
                <p>Capable of straightforward tasks, very fast, and lower cost</p>
            </div>
        )
    } else if (model == "text-ada-001") {
        return (
            <div>
                <h3>- text-ada-001 -</h3>
                <br />
                <p>Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.</p>
            </div>
        )
    } else if (tempreture) {
        return (
            <div>
                <p>
                    Controls randomness: Lowering results in less random completions.<br />
                    As the temperature approaches zero, the model will become deterministic and repetitive.
                </p>
            </div>
        )
    } else if (maxTokens) {
        return (
            <div>
                <p>
                    The maximum number of tokens to generate. <br />
                    Requests can use up to 2,048 or 4 000 tokens shared between prompts, <br /> The exact limit varies by model.<br />
                    (One token is roughly 4 characters for nomal English text)
                </p>
            </div>
        )
    }


}