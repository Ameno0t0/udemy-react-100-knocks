type ButtonProps = {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string
}

const Button = ({text='Click me', size='medium', color='blue'}: ButtonProps
) => {
    const buttonStyle = {
      padding: size === 'small' ? '5px 10px' :
              size === 'large' ? '15px 30px' : '10px 20px',
      backgroundColor: color,
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      corsor: 'pointer'
    };
  return (
    <div>
      <button style={buttonStyle}>
        {text}
      </button>
    </div>
  );
}

export default Button;