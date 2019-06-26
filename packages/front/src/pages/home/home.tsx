import React                                  from 'react';
import {Grid,GridColumn}                      from '@atlaskit/page';
import SizeDetector                           from '@atlaskit/size-detector';
import Page                                   from '../../components/Page';
import TopBar                                 from '../../blocks/TopBar';
import {StyledDescription,StyledListSwitcher} from './styles';
import Store                                  from './store';
import AppSwitcherIcon                        from '@atlaskit/icon/glyph/app-switcher';
import ListIcon                               from '@atlaskit/icon/glyph/list';
import Button                                 from '@atlaskit/button';
import Tooltip                                from '@atlaskit/tooltip';
import {GridView,ListView}                    from '../../components/News';
import {Query}                                from 'react-apollo';
import {NEWS_LIST}                            from '../../utils/queries';

const Home=() => {
  const [states,actions]=Store();
  const onResize=() => ({width}) => actions.resizer.setState({width});
  const splitElements=(ar: any[],chunks: number): any[][] => (
    Array.from({length:chunks},() => []).map((_el,i) => {
      let chunkedAr: Object[]=[];
      for(let index=i; index<ar.length; index=index+chunks){
        chunkedAr.push(ar[index]);
      }
      return chunkedAr;
    })
  );
  const listSwitcherOnclick=(value: 'grid'|'list') => () => {
    if(states.listSwitcher.selected===value) return;
    actions.listSwitcher.setState({
      selected:value
    });
  };
  return (
    <Query query={NEWS_LIST} variables={{}} notifyOnNetworkStatusChange={true}>
      {({data}) => {
        const items=data.news;
        return items? (
          <SizeDetector onResize={onResize}>
            {({width}) => (
              <React.Fragment>
                <TopBar/>
                <StyledDescription>
                  PROFI.RU &mdash; professional search service.
                  <br/>
                  Choose proven professionals 👨‍🍳👩‍🌾👨‍🔧
                </StyledDescription>
                <Page style={{
                  margin:'0 auto 2rem',
                  maxWidth:`${width<1035? 360: (width<1240)? 660: 960}px`
                }}>
                  <React.Fragment>
                    <StyledListSwitcher>
                      <Tooltip content="Grid view">
                        <Button isSelected={states.listSwitcher.selected==='grid'} style={{
                          borderBottomRightRadius:'unset',
                          borderTopRightRadius:'unset'
                        }} onClick={listSwitcherOnclick('grid')}>
                          <AppSwitcherIcon label="Grid"/>
                        </Button>
                      </Tooltip>
                      <Tooltip content="List view">
                        <Button isSelected={states.listSwitcher.selected==='list'} style={{
                          borderBottomLeftRadius:'unset',
                          borderTopLeftRadius:'unset'
                        }} onClick={listSwitcherOnclick('list')}>
                          <ListIcon label="List"/>
                        </Button>
                      </Tooltip>
                    </StyledListSwitcher>
                    <Grid layout="fluid" spacing="compact">
                      {
                        states.listSwitcher.selected==='grid'? (
                          width<1035? (
                            <React.Fragment>
                              {splitElements(items,1).map((chunks,ci) => (
                                <GridColumn medium={12} key={`1Column-${ci}`}>
                                  {chunks.map(item => (
                                    <GridView
                                      key={`1Card-${item.id}`}
                                      {...item}
                                    />
                                  ))}
                                </GridColumn>
                              ))}
                            </React.Fragment>
                          ): (width<1240? (
                            <React.Fragment>
                              {splitElements(items,2).map((chunks,ci) => (
                                <GridColumn medium={6} key={`2Column-${ci}`}>
                                  {chunks.map(item => (
                                    <GridView
                                      key={`2Card-${item.id}`}
                                      {...item}
                                    />
                                  ))}
                                </GridColumn>
                              ))}
                            </React.Fragment>
                          ): (
                            <React.Fragment>
                              {splitElements(items,3).map((chunks,ci) => (
                                <GridColumn medium={4} key={`3Column-${ci}`}>
                                  {chunks.map(item => (
                                    <GridView
                                      key={`3Card-${item.id}`}
                                      {...item}
                                    />
                                  ))}
                                </GridColumn>
                              ))}
                            </React.Fragment>
                          ))
                        ): (
                          <GridColumn medium={12}>
                            {items.map(item => (
                              <ListView
                                key={`1List-${item.id}`}
                                {...item}
                              />
                            ))}
                          </GridColumn>
                        )
                      }
                    </Grid>
                  </React.Fragment>
                </Page>
              </React.Fragment>
            )}
          </SizeDetector>
        ): (<div/>);
      }}
    </Query>
  );
};
export default Home;
