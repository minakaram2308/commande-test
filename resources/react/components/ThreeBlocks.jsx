import React from "react";
import Slide from "react-reveal/Fade";

function ThreeBlocks({ blocks, classes, noTitle }) {
    return (
        <div className={`container ${classes}`}>
            <div className="ThreeBlocks container text-center py-5 my-5">
                {!noTitle && (
                    <p className="mb4p5 fs-4">We 're here to deliver</p>
                )}
                <div className="row">
                    {blocks.map((block, index) => (
                        <Slide
                            {...(index === 1
                                ? { bottom: true }
                                : index === 2
                                ? { right: true }
                                : { left: true })}
                            key={index}
                        >
                            <div className="col-md-4">
                                <img
                                    src={block.iconPath}
                                    className="ThreeBlocksIcon"
                                    alt="Icon"
                                />
                                <p className="ThreeBlockstitle">
                                    {block.title}
                                </p>
                                <p className="ThreeBlockssubTitle">
                                    {block.subtitle}
                                </p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ThreeBlocks;
