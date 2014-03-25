/** @constructor */
ScalaJS.c.scala_util_grammar_AnyTreeRHS$ = (function() {
  ScalaJS.c.scala_util_grammar_TreeRHS.call(this)
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype = new ScalaJS.inheritable.scala_util_grammar_TreeRHS();
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.constructor = ScalaJS.c.scala_util_grammar_AnyTreeRHS$;
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productPrefix__T = (function() {
  return "AnyTreeRHS"
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_grammar_AnyTreeRHS$(x$1)
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.hashCode__I = (function() {
  return -112331501
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.toString__T = (function() {
  return "AnyTreeRHS"
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_util_grammar_AnyTreeRHS()
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.init___ = (function() {
  ScalaJS.c.scala_util_grammar_TreeRHS.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_grammar_AnyTreeRHS = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_util_grammar_AnyTreeRHS$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_grammar_AnyTreeRHS$.prototype = ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype;
ScalaJS.is.scala_util_grammar_AnyTreeRHS$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_grammar_AnyTreeRHS$)))
});
ScalaJS.as.scala_util_grammar_AnyTreeRHS$ = (function(obj) {
  if ((ScalaJS.is.scala_util_grammar_AnyTreeRHS$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.grammar.AnyTreeRHS")
  }
});
ScalaJS.isArrayOf.scala_util_grammar_AnyTreeRHS$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_grammar_AnyTreeRHS$)))
});
ScalaJS.asArrayOf.scala_util_grammar_AnyTreeRHS$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_grammar_AnyTreeRHS$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.grammar.AnyTreeRHS;", depth)
  }
});
ScalaJS.data.scala_util_grammar_AnyTreeRHS$ = new ScalaJS.ClassTypeData({
  scala_util_grammar_AnyTreeRHS$: 0
}, false, "scala.util.grammar.AnyTreeRHS$", ScalaJS.data.scala_util_grammar_TreeRHS, {
  scala_util_grammar_AnyTreeRHS$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_grammar_TreeRHS: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_grammar_AnyTreeRHS$.prototype.$classData = ScalaJS.data.scala_util_grammar_AnyTreeRHS$;
ScalaJS.moduleInstances.scala_util_grammar_AnyTreeRHS = undefined;
ScalaJS.modules.scala_util_grammar_AnyTreeRHS = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_grammar_AnyTreeRHS)) {
    ScalaJS.moduleInstances.scala_util_grammar_AnyTreeRHS = new ScalaJS.c.scala_util_grammar_AnyTreeRHS$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_grammar_AnyTreeRHS
});
//@ sourceMappingURL=AnyTreeRHS$.js.map
