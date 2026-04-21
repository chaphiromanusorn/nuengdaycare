const Logo = ({ size = 48, textSize = '1.4rem', color = '#D4785A', showText = true }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sun rays */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <line
            key={i}
            x1="40" y1="40"
            x2={40 + 34 * Math.cos((angle * Math.PI) / 180)}
            y2={40 + 34 * Math.sin((angle * Math.PI) / 180)}
            stroke="#E8A838"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        ))}
        {/* Warm circle background */}
        <circle cx="40" cy="40" r="22" fill="#FDF6EC" />
        {/* Heart shape */}
        <path
          d="M40 52 C40 52 22 42 22 31 C22 25 27 20 33 20 C36.5 20 39.5 22 40 24 C40.5 22 43.5 20 47 20 C53 20 58 25 58 31 C58 42 40 52 40 52Z"
          fill={color}
        />
        {/* Small star/sparkle inside heart */}
        <circle cx="36" cy="30" r="2" fill="white" opacity="0.6" />
        {/* Outer ring dots */}
        {[0,60,120,180,240,300].map((angle, i) => (
          <circle
            key={i}
            cx={40 + 30 * Math.cos((angle * Math.PI) / 180)}
            cy={40 + 30 * Math.sin((angle * Math.PI) / 180)}
            r="2"
            fill="#7A9E7E"
            opacity="0.6"
          />
        ))}
      </svg>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: textSize,
            fontWeight: 700,
            color: '#6B4423',
            letterSpacing: '-0.01em'
          }}>
            Nueng
          </span>
          <span style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: `calc(${textSize} * 0.55)`,
            fontWeight: 600,
            color: '#D4785A',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}>
            Day Care
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
