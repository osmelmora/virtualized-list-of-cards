import React from "react";
import useSWR from "swr";
import { AutoSizer, List } from "react-virtualized";
import { Flex } from "@chakra-ui/core";

import { Card } from "./Card";
import { contacts } from "./data";

const ITEM_SIZE = 250;

export const Board = () => {
  const { data = [] } = useSWR("contacts", () => {
    return new Promise(resolve =>
      setTimeout(() => {
        return resolve(contacts);
      }, 1000)
    );
  });

  if (!data) return "Loading...";

  const ITEMS_COUNT = data.length;

  return (
    <div style={{ height: "100vh" }}>
      <AutoSizer>
        {({ height, width }) => {
          const itemsPerRow = Math.floor(width / (ITEM_SIZE + 5));
          const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);

          return (
            <List
              className="List"
              width={width}
              height={height}
              rowCount={rowCount}
              rowHeight={ITEM_SIZE}
              rowRenderer={({ index, key, style }) => {
                const items = [];
                const fromIndex = index * itemsPerRow;
                const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

                for (let i = fromIndex; i < toIndex; i++) {
                  const datum = data[i];
                  items.push(
                    <Card
                      name={datum.name}
                      avatar={datum.avatar}
                      email={datum.email}
                      username={datum.username}
                      marginX={1}
                      marginY={2}
                    />
                  );
                }

                return (
                  <Flex key={key} style={style}>
                    {items}
                  </Flex>
                );
              }}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};
