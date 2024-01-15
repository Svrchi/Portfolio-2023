import React, { useState, useRef, useEffect, ComponentType } from "react";
import { motion, useSpring } from "framer-motion";

// Define types for the props of the component that will be wrapped
interface WithClickProps {
    width: string;
    height: string;
    [key: string]: any; // For additional props that may be passed to the component
}

// Define types for the motion div element
interface MotionDivProps extends React.HTMLProps<HTMLDivElement> {
    ref: React.RefObject<HTMLDivElement>;
}

const spring = {
    type: "spring",
    stiffness: 300,
    damping: 40,
};

export function withClick<T extends WithClickProps>(Component: ComponentType<T>): ComponentType<T> {
    // eslint-disable-next-line react/display-name
    return (props: T) => {
        const [isFlipped, setIsFlipped] = useState(false);
        const handleClick = () => setIsFlipped((prevState) => !prevState);

        const [rotateXaxis, setRotateXaxis] = useState(0);
        const [rotateYaxis, setRotateYaxis] = useState(0);
        const ref = useRef<HTMLDivElement>(null);

        const handleMouseMove = (event: MouseEvent) => {
            const element = ref.current;
            if (element) {
                const elementRect = element.getBoundingClientRect();
                const elementWidth = elementRect.width;
                const elementHeight = elementRect.height;
                const elementCenterX = elementWidth / 2;
                const elementCenterY = elementHeight / 2;
                const mouseX = event.clientY - elementRect.y - elementCenterY;
                const mouseY = event.clientX - elementRect.x - elementCenterX;
                const degreeX = (mouseX / elementWidth) * 20;
                const degreeY = (mouseY / elementHeight) * 20;
                setRotateXaxis(degreeX);
                setRotateYaxis(degreeY);
            }
        };

        const handleMouseEnd = () => {
            setRotateXaxis(0);
            setRotateYaxis(0);
        };

        const dx = useSpring(0, spring);
        const dy = useSpring(0, spring);

        useEffect(() => {
            dx.set(-rotateXaxis);
            dy.set(rotateYaxis);
        }, [rotateXaxis, rotateYaxis, dx, dy]);

        return (
            <motion.div
                onClick={handleClick}
                transition={spring}
                style={{
                    perspective: "1200px",
                    transformStyle: "preserve-3d",
                    width: props.width,
                    height: props.height,
                }}
            >
                <motion.div
                    ref={ref}
                    whileHover={{ scale: 1.1 }}
                    onMouseMove={handleMouseMove as any} // Typecasting to 'any' due to MouseEvent type incompatibility
                    onMouseLeave={handleMouseEnd}
                    transition={spring}
                    style={{
                        width: "100%",
                        height: "100%",
                        rotateX: dx,
                        rotateY: dy,
                    }}
                >
                    {/* ... rest of the component */}
                </motion.div>
            </motion.div>
        );
    };
}
