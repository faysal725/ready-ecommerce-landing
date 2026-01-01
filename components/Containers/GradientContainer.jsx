import gradientStyle from "./GradientContainer.module.css";  


export default function GradientContainer({children}) {
    

    return (
    <div className={gradientStyle.gradientBorder}>
      <div className={gradientStyle.gradientBorderContent}>
        {children}
      </div>
    </div>
    )
}