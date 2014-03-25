/** @constructor */
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$ = (function() {
  ScalaJS.c.scala_util_grammar_HedgeRHS.call(this)
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype = new ScalaJS.inheritable.scala_util_grammar_HedgeRHS();
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.constructor = ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$;
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productPrefix__T = (function() {
  return "EmptyHedgeRHS"
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_grammar_EmptyHedgeRHS$(x$1)
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.hashCode__I = (function() {
  return 1078677733
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.toString__T = (function() {
  return "EmptyHedgeRHS"
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_util_grammar_EmptyHedgeRHS()
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.init___ = (function() {
  ScalaJS.c.scala_util_grammar_HedgeRHS.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_grammar_EmptyHedgeRHS = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_util_grammar_EmptyHedgeRHS$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_grammar_EmptyHedgeRHS$.prototype = ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype;
ScalaJS.is.scala_util_grammar_EmptyHedgeRHS$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_grammar_EmptyHedgeRHS$)))
});
ScalaJS.as.scala_util_grammar_EmptyHedgeRHS$ = (function(obj) {
  if ((ScalaJS.is.scala_util_grammar_EmptyHedgeRHS$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.grammar.EmptyHedgeRHS")
  }
});
ScalaJS.isArrayOf.scala_util_grammar_EmptyHedgeRHS$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_grammar_EmptyHedgeRHS$)))
});
ScalaJS.asArrayOf.scala_util_grammar_EmptyHedgeRHS$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_grammar_EmptyHedgeRHS$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.grammar.EmptyHedgeRHS;", depth)
  }
});
ScalaJS.data.scala_util_grammar_EmptyHedgeRHS$ = new ScalaJS.ClassTypeData({
  scala_util_grammar_EmptyHedgeRHS$: 0
}, false, "scala.util.grammar.EmptyHedgeRHS$", ScalaJS.data.scala_util_grammar_HedgeRHS, {
  scala_util_grammar_EmptyHedgeRHS$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_grammar_HedgeRHS: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$.prototype.$classData = ScalaJS.data.scala_util_grammar_EmptyHedgeRHS$;
ScalaJS.moduleInstances.scala_util_grammar_EmptyHedgeRHS = undefined;
ScalaJS.modules.scala_util_grammar_EmptyHedgeRHS = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_grammar_EmptyHedgeRHS)) {
    ScalaJS.moduleInstances.scala_util_grammar_EmptyHedgeRHS = new ScalaJS.c.scala_util_grammar_EmptyHedgeRHS$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_grammar_EmptyHedgeRHS
});
//@ sourceMappingURL=EmptyHedgeRHS$.js.map
