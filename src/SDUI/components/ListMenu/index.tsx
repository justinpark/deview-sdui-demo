import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import { ListMenuFragment } from './__generated__/ListMenuFragment';

type Props = Omit<ListMenuFragment, '__typename'>;

export default function ProductCard({ title, items }: Props) {
  return (
    <Paper>
      <List
        {...(title && {
          subheader: (
            <ListSubheader component="div" id="nested-list-subheader">
              {title}
            </ListSubheader>
          ),
        })}
      >
        {items?.map(
          (item) =>
            item && (
              <>
                {item.title && (
                  <ListItem
                    key={`${item.title}`}
                    button
                    component="a"
                    {...(item.url && { href: item.url })}
                  >
                    <ListItemText primary={`${item.title}`} />
                  </ListItem>
                )}
                {item.divider && <Divider />}
              </>
            )
        )}
      </List>
    </Paper>
  );
}
