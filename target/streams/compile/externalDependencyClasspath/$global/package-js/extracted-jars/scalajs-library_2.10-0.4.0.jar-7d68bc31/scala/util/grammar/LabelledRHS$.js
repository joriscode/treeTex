/** @constructor */
ScalaJS.c.scala_util_grammar_LabelledRHS$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.constructor = ScalaJS.c.scala_util_grammar_LabelledRHS$;
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.toString__T = (function() {
  return "LabelledRHS"
});
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.apply__O__I__Lscala_util_grammar_LabelledRHS = (function(label, hnt) {
  return new ScalaJS.c.scala_util_grammar_LabelledRHS().init___O__I(label, hnt)
});
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.unapply__Lscala_util_grammar_LabelledRHS__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2().init___O__O(x$0.label__O(), ScalaJS.bI(x$0.hnt__I())))
  }
});
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_grammar_LabelledRHS()
});
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.unapply__Lscala_util_grammar_LabelledRHS__ = (function(x$0) {
  return this.unapply__Lscala_util_grammar_LabelledRHS__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.apply__O__I__ = (function(label, hnt) {
  return this.apply__O__I__Lscala_util_grammar_LabelledRHS(label, hnt)
});
/** @constructor */
ScalaJS.inheritable.scala_util_grammar_LabelledRHS$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_grammar_LabelledRHS$.prototype = ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype;
ScalaJS.is.scala_util_grammar_LabelledRHS$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_grammar_LabelledRHS$)))
});
ScalaJS.as.scala_util_grammar_LabelledRHS$ = (function(obj) {
  if ((ScalaJS.is.scala_util_grammar_LabelledRHS$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.grammar.LabelledRHS")
  }
});
ScalaJS.isArrayOf.scala_util_grammar_LabelledRHS$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_grammar_LabelledRHS$)))
});
ScalaJS.asArrayOf.scala_util_grammar_LabelledRHS$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_grammar_LabelledRHS$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.grammar.LabelledRHS;", depth)
  }
});
ScalaJS.data.scala_util_grammar_LabelledRHS$ = new ScalaJS.ClassTypeData({
  scala_util_grammar_LabelledRHS$: 0
}, false, "scala.util.grammar.LabelledRHS$", ScalaJS.data.java_lang_Object, {
  scala_util_grammar_LabelledRHS$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_grammar_LabelledRHS$.prototype.$classData = ScalaJS.data.scala_util_grammar_LabelledRHS$;
ScalaJS.moduleInstances.scala_util_grammar_LabelledRHS = undefined;
ScalaJS.modules.scala_util_grammar_LabelledRHS = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_grammar_LabelledRHS)) {
    ScalaJS.moduleInstances.scala_util_grammar_LabelledRHS = new ScalaJS.c.scala_util_grammar_LabelledRHS$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_grammar_LabelledRHS
});
//@ sourceMappingURL=LabelledRHS$.js.map
