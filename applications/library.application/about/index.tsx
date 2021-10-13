import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {StatusBar, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {AddCart} from './_redux/actions';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';
const bodyConstruct = [
  {
    title: 'ABOUT IEC BOOKS',
    body: `Intellect Educational Concept Limited is registered on the fifth of February,2008 by the Corporate Affairs Commission of Nigeria. 
     
     The company is educational and purposely created to advance the standard of education in Nigeria. The route taken is through publishing of quality text books and enhanced learning materials for students and teachers at Primary, secondary and tertiary levels of education.`,
  },
  {
    title: 'Mission',
    body: 'The Mission of Intellect Educational Concept is to develop text books that reflect National Curricular in-use as well as assist learners improve their intellectual capacities and skills necessary for continuous learning. The company will utilize modern electronic techniques that will serve as learning assisted tools for student’s learner. In this respect learning is individualized and students can learn at their own pace.',
  },
  {
    title: 'Vision',
    body: 'To make Intellect Educational Concept a foremost Publisher of standard text books in Nigeria and the rest of the world.',
  },
  {
    title: 'SOLUTION TO EDUCATION',
    body: `Education is both labour and capital-intensive industry. It is an expensive enterprise industry that no sense country can afford to relegate. Education defines society and subject it to national, regional and international categorization. A developed society is an educated society, and underdeveloped society is an illiterate society. Economy today is measured not by God given natural resources but by the intellect of the people populating a particular space call country.

    A society that plans the education of its people; is a society that invites peace, prosperity and social cohesion to its members. In contrast to a society that relegates Education to nothingness, that society will simply exist in pettish world where social crises are norms rather than an exception. Poverty, illiteracy and social unrest all characterized a poorly educated society.
    
    Intellect Educational Concept aims at simplifying the arts learning; in the sense that both students and teachers need to find in books materials that drives learners’ interest from simple to challenging tasks.
    
    Therefore, background knowledge of the prior concepts is necessary to the understanding of the higher order concepts.
    
    As regards to children books, we are aware that children love illustrations. In this regard illustrations are made to reflect life experiences. It is our belief in the Intellect Educational Concept that learner’s interest could only be sustained if local examples which he/she can see, touch and experience are embedded in the student’s text.
    
    As a deliberate policy, we make sure that all our text books are permeated with relevant examples and illustrations that are derived from the local environment. Our aim here is to ensure that textual materials invigorate natural impulses of children’s curiosity of wanting to know about their environment. And Channel that energy towards purposeful study of our natural world, beginning from children’s immediate environment. Activities and exercises feature prominently in our books, these are designed to help students attain stated learning objectives of topics and units covered.`,
  },
];
const mapDispatchProps = (dispatch: any) => ({
  AdjustQuantity: (book: entities.Book, isAdding: boolean) =>
    dispatch({type: AddCart.ADD_TO_CART_CALLER, payload: book, isAdding}),
});

const mapStateProps = (store: any) => ({
  carts: store.BooksCart.carts,
});

type Props = {
  carts: ReduxStore.BookInCart[];
  componentId: string;
  viewSelectedBook: (book: entities.Book) => void;
  AdjustQuantity: (book: entities.Book, isAdding: boolean) => void;
};

class AboutScreen extends React.Component<Props> {
  render() {
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    return (
      <View style={defaultStyles.containerStyle}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />
        <View style={styles.cartHeader}>
          <View style={styles.headerLeft}>
            <BackButton.NormalButton
              context={this.context}
              onPress={() => Navigation.pop(this.props.componentId)}
            />
          </View>
          <View style={styles.headerBody}>
            <Text style={styles.cartText}>About IEC</Text>
          </View>
          <View style={styles.headerLeft} />
        </View>
        <View style={styles.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {bodyConstruct.map(info => (
              <View style={styles.section}>
                <Text style={styles.sectionTextHead}>{info.title}</Text>
                <Text style={styles.bodyText}>{info.body}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

AboutScreen.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(AboutScreen);
