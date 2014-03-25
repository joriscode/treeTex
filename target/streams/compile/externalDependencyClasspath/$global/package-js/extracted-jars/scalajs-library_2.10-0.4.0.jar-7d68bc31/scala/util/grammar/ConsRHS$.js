/** @constructor */
ScalaJS.c.scala_util_grammar_ConsRHS$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this)
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.constructor = ScalaJS.c.scala_util_grammar_ConsRHS$;
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.toString__T = (function() {
  return "ConsRHS"
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.apply__I__I__Lscala_util_grammar_ConsRHS = (function(tnt, hnt) {
  return new ScalaJS.c.scala_util_grammar_ConsRHS().init___I__I(tnt, hnt)
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.unapply__Lscala_util_grammar_ConsRHS__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple2$mcII$sp().init___I__I(x$0.tnt__I(), x$0.hnt__I()))
  }
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_util_grammar_ConsRHS()
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__I__I__Lscala_util_grammar_ConsRHS(ScalaJS.uI(v1), ScalaJS.uI(v2))
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.unapply__Lscala_util_grammar_ConsRHS__ = (function(x$0) {
  return this.unapply__Lscala_util_grammar_ConsRHS__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.apply__I__I__ = (function(tnt, hnt) {
  return this.apply__I__I__Lscala_util_grammar_ConsRHS(tnt, hnt)
});
/** @constructor */
ScalaJS.inheritable.scala_util_grammar_ConsRHS$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_grammar_ConsRHS$.prototype = ScalaJS.c.scala_util_grammar_ConsRHS$.prototype;
ScalaJS.is.scala_util_grammar_ConsRHS$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_grammar_ConsRHS$)))
});
ScalaJS.as.scala_util_grammar_ConsRHS$ = (function(obj) {
  if ((ScalaJS.is.scala_util_grammar_ConsRHS$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.grammar.ConsRHS")
  }
});
ScalaJS.isArrayOf.scala_util_grammar_ConsRHS$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_grammar_ConsRHS$)))
});
ScalaJS.asArrayOf.scala_util_grammar_ConsRHS$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_grammar_ConsRHS$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.grammar.ConsRHS;", depth)
  }
});
ScalaJS.data.scala_util_grammar_ConsRHS$ = new ScalaJS.ClassTypeData({
  scala_util_grammar_ConsRHS$: 0
}, false, "scala.util.grammar.ConsRHS$", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_util_grammar_ConsRHS$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_grammar_ConsRHS$.prototype.$classData = ScalaJS.data.scala_util_grammar_ConsRHS$;
ScalaJS.moduleInstances.scala_util_grammar_ConsRHS = undefined;
ScalaJS.modules.scala_util_grammar_ConsRHS = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_grammar_ConsRHS)) {
    ScalaJS.moduleInstances.scala_util_grammar_ConsRHS = new ScalaJS.c.scala_util_grammar_ConsRHS$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_grammar_ConsRHS
});
//@ sourceMappingURL=ConsRHS$.js.map
