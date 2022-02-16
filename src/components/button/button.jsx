import './button.css';
export default function Button(props) {
    return (
      <div class="container">
      <div class="center">
        <a href="#" class="btn">
          <svg width="180px" height="45px" viewBox="0 0 180 45" class="border">
            <polyline points="179,1 179,44 1,44 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,44 1,44 1,1 179,1" class="hl-line" />
          </svg>
          <span>{props.text}</span>
        </a>
      </div>
      </div>
    )
}
