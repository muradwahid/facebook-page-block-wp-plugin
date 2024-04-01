import { Popover } from '@wordpress/components';
import { useEffect, useRef, useState } from 'react';
import { BsPlusSquareFill } from 'react-icons/bs';
import { HiMiniXMark } from 'react-icons/hi2';
import './selectOptions.scss';
const AnchorsByTag = ({ value, options,onChange=()=>{} }) => {
  const [visible, setVisible] = useState(false);
  const refHeadingTag = useRef();
  const [newValue, setValue] = useState(value);
  const addValue = (option) => {
    const restVal = [...newValue];
    if (!restVal.includes(option)) {
      restVal.push(option);
      setValue( restVal );
    }
  };
  useEffect(() => {
    const handle = (e) => {
      if (!refHeadingTag?.current?.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => {
      document.removeEventListener('mousedown', handle);
    };
  });
  useEffect(() => {
    onChange(newValue);
  }, [newValue]);
  return (
    <div>
      <ul className="anchor-list-admin-panel">
        {newValue &&
          newValue.map((val, idx) => (
            <li key={idx} className="anchor-admin-panel-list">
              <HiMiniXMark
                className="deleteIcon"
                onClick={() =>
                  setValue( newValue.filter((val, i) => i !== idx))
                }
              />
              {val}
            </li>
          ))}
        {value && value.length < 6 && (
          <li
            onClick={() => setVisible(!visible)}
            className="anchor-admin-panel-list-plus-icon"
          >
            <BsPlusSquareFill className="squirePlusIcon" />
          </li>
        )}
        <input
          onClick={() => setVisible(!visible)}
          type="search"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </ul>
      {visible && (
        <Popover ref={refHeadingTag} className="popover-anchor-admin-panel">
          {options.map((option, idx) => (
            <p
              key={idx}
              onClick={() => addValue(option)}
              className={`${newValue.includes(option) ? 'isActiveTag' : ''}`}
            >
              {option}
            </p>
          ))}
        </Popover>
      )}
    </div>
  );
};

export default AnchorsByTag;
