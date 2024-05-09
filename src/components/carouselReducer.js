import { useEffect, useReducer, useState } from "react";
import { useSwipeable } from "react-swipeable";

const [current, setCurrent] = useState(0)
const [state, dispatch] = useReducer(carouselReducer, initialCarouselState)

useEffect(() => {
    const next = (current + 1) % slides.length
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
}, [current])

useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "next", length }), interval);
    return () => clearTimeout(id);
  }, [state.offset, state.active]);
  
  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

function carouselReducer (state, action) {
    switch (action.type) {
        case "jump":
            return {
                ...state, 
                desired: action.desired
            };
        case "next":
            return {
                ...state,
                desired: next(action.length, state.active)
            };
        case "prev":
            return {
                ...state,
                desired: previous(action.length, state.active)
            };
        case "done":
            return {
                ...state,
                offset: NaN,
                active: state.desired
            };
        case "drag":
            return {
                ...state,
                offset: action.offset
            };
        default:
            return state;
    }
}

const handlers = useSwipeable({
    onSwiping(e) {
        dispatch({
            type: "drag",
            offset: -e.deltaX
        })
    },
    onSwipedLeft(e) {
        const t = threshold(e.event.target);

        if(e.deltaX >= t) {
            dispatch({
                type: "next",
                length
            })
        } else {
            dispatch({
                type: "drag",
                offset: 0
            })
        }
    },
    onSwipedRight(e) {
        const t = threshold(e.event.target);

        if (-e.deltaX >= t) {
            dispatch({
                type: "prev",
            })
        }
        else {
            dispatch({
                type: "drag",
                offset: 0
            })
        }
    },
    trackMouse: true,
    trackTouch: true

})