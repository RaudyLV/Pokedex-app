import './SearchBar.css';

export const SearchBar = ({value, onChange, placeholder }) => {
    return(
        <div className='search-bar'>
            <input 
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                className='search-input'
             />
             <svg
                className='search-icon'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
             >
                <circle cx='11' cy='11' r='8' strokeWidth='2'/>
                <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
             </svg>
        </div>
    )
}