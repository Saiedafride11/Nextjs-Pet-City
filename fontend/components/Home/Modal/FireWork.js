import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function getAnimationSettings (angle, originX)
{
    return {
        particleCount: 6,
        angle,
        spread: 55,
        origin: { x: originX },
        colors: ["#bb0000", "#ffffff"]
    };
}

const FireWork = () =>
{
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();

    const getInstance = useCallback((instance) =>
    {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() =>
    {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(60, 0));
            refAnimationInstance.current(getAnimationSettings(120, 1));
        }
    }, []);

    useEffect(() =>
    {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 16));
        };
    }, []);

    useEffect(() =>
    {
        setTimeout(() =>
        {
            clearInterval(intervalId);
            setIntervalId(null);
        }, 5000);
    }, [intervalId]);

    /* const startAnimation = useCallback(() =>
    {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 16));
        }
    }, [nextTickAnimation, intervalId]); */

    /* const pauseAnimation = useCallback(() =>
    {
        clearInterval(intervalId);
        setIntervalId(null);
    }, [intervalId]); */

    /* const stopAnimation = useCallback(() =>
    {
        clearInterval(intervalId);
        setIntervalId(null);
        refAnimationInstance.current && refAnimationInstance.current.reset();
    }, [intervalId]); */

    /* useEffect(() =>
    {
        return () =>
        {
            clearInterval(intervalId);
        };
    }, [intervalId]); */

    return (
        <>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </>
    )
}

export default FireWork