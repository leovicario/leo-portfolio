import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {

    return(
        <div>
           <AnimatedCursor
      innerSize={0}
      outerSize={48}
      color='var(--accent)'
      outerAlpha={0.7}
      innerAlpha={1}
      innerStyle={{backgroundColor:'var(--accent'}}
      outerStyle={{backgroundColor:'var(--accent)', border: '1px solid var(--accent)', mixBlendMode: 'exclusion'}}
      innerScale={3}
      outerScale={3.5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
        </div>
    )
};

export default Cursor