/** @constructor */
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$ = (function() {
  ScalaJS.c.scala_util_grammar_HedgeRHS.call(this)
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype = new ScalaJS.inheritable.scala_util_grammar_HedgeRHS();
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.constructor = ScalaJS.c.scala_util_grammar_AnyHedgeRHS$;
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productPrefix__T = (function() {
  return "AnyHedgeRHS"
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_grammar_AnyHedgeRHS$(x$1)
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.hashCode__I = (function() {
  return -1600016764
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.toString__T = (function() {
  return "AnyHedgeRHS"
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_util_grammar_AnyHedgeRHS()
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.init___ = (function() {
  ScalaJS.c.scala_util_grammar_HedgeRHS.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_grammar_AnyHedgeRHS = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_util_grammar_AnyHedgeRHS$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_grammar_AnyHedgeRHS$.prototype = ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype;
ScalaJS.is.scala_util_grammar_AnyHedgeRHS$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_grammar_AnyHedgeRHS$)))
});
ScalaJS.as.scala_util_grammar_AnyHedgeRHS$ = (function(obj) {
  if ((ScalaJS.is.scala_util_grammar_AnyHedgeRHS$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.grammar.AnyHedgeRHS")
  }
});
ScalaJS.isArrayOf.scala_util_grammar_AnyHedgeRHS$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_grammar_AnyHedgeRHS$)))
});
ScalaJS.asArrayOf.scala_util_grammar_AnyHedgeRHS$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_grammar_AnyHedgeRHS$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.grammar.AnyHedgeRHS;", depth)
  }
});
ScalaJS.data.scala_util_grammar_AnyHedgeRHS$ = new ScalaJS.ClassTypeData({
  scala_util_grammar_AnyHedgeRHS$: 0
}, false, "scala.util.grammar.AnyHedgeRHS$", ScalaJS.data.scala_util_grammar_HedgeRHS, {
  scala_util_grammar_AnyHedgeRHS$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_grammar_HedgeRHS: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_grammar_AnyHedgeRHS$.prototype.$classData = ScalaJS.data.scala_util_grammar_AnyHedgeRHS$;
ScalaJS.moduleInstances.scala_util_grammar_AnyHedgeRHS = undefined;
ScalaJS.modules.scala_util_grammar_AnyHedgeRHS = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_grammar_AnyHedgeRHS)) {
    ScalaJS.moduleInstances.scala_util_grammar_AnyHedgeRHS = new ScalaJS.c.scala_util_grammar_AnyHedgeRHS$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_grammar_AnyHedgeRHS
});
//@ sourceMappingURL=AnyHedgeRHS$.js.map
