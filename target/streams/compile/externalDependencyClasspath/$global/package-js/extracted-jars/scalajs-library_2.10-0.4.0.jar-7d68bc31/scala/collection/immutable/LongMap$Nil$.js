/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMap$Nil$ = (function() {
  ScalaJS.c.scala_collection_immutable_LongMap.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype = new ScalaJS.inheritable.scala_collection_immutable_LongMap();
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMap$Nil$;
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.equals__O__Z = (function(that$5) {
  var x1 = that$5;
  if (ScalaJS.is.java_lang_Object(x1)) {
    var x2 = x1;
    if ((this === x2)) {
      return true
    }
  };
  if (ScalaJS.is.scala_collection_immutable_LongMap(x1)) {
    return false
  };
  return ScalaJS.impls.scala_collection_GenMapLike$class__equals__Lscala_collection_GenMapLike__O__Z(this, x1)
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productPrefix__T = (function() {
  return "Nil"
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.readResolve__p6__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_LongMap$Nil()
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_immutable_LongMap.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Nil = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMap$Nil$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMap$Nil$.prototype = ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype;
ScalaJS.is.scala_collection_immutable_LongMap$Nil$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMap$Nil$)))
});
ScalaJS.as.scala_collection_immutable_LongMap$Nil$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMap$Nil$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMap$Nil")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Nil$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMap$Nil$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMap$Nil$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Nil$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMap$Nil;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMap$Nil$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMap$Nil$: 0
}, false, "scala.collection.immutable.LongMap$Nil$", ScalaJS.data.scala_collection_immutable_LongMap, {
  scala_collection_immutable_LongMap$Nil$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_immutable_LongMap: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMap$Nil$.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMap$Nil$;
ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Nil = undefined;
ScalaJS.modules.scala_collection_immutable_LongMap$Nil = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Nil)) {
    ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Nil = new ScalaJS.c.scala_collection_immutable_LongMap$Nil$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_LongMap$Nil
});
//@ sourceMappingURL=LongMap$Nil$.js.map
