/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMap$Tip = (function() {
  ScalaJS.c.scala_collection_immutable_LongMap.call(this);
  this.key$6 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.value$6 = null
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype = new ScalaJS.inheritable.scala_collection_immutable_LongMap();
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMap$Tip;
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.key__J = (function() {
  return this.key$6
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.value__O = (function() {
  return this.value$6
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.withValue__O__Lscala_collection_immutable_LongMap$Tip = (function(s) {
  if ((s === this.value__O())) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(this.key__J(), s)
  }
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.copy__J__O__Lscala_collection_immutable_LongMap$Tip = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_LongMap$Tip().init___J__O(key, value)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.copy$default$1__J = (function() {
  return this.key__J()
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.copy$default$2__O = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productPrefix__T = (function() {
  return "Tip"
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bJ(this.key__J());
        break
      };
    case 1:
      {
        return this.value__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.init___J__O = (function(key, value) {
  this.key$6 = key;
  this.value$6 = value;
  ScalaJS.c.scala_collection_immutable_LongMap.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.copy__J__O__ = (function(key, value) {
  return this.copy__J__O__Lscala_collection_immutable_LongMap$Tip(key, value)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.withValue__O__ = (function(s) {
  return this.withValue__O__Lscala_collection_immutable_LongMap$Tip(s)
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.key__ = (function() {
  return ScalaJS.bJ(this.key__J())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMap$Tip = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMap$Tip.prototype = ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype;
ScalaJS.is.scala_collection_immutable_LongMap$Tip = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMap$Tip)))
});
ScalaJS.as.scala_collection_immutable_LongMap$Tip = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMap$Tip(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMap$Tip")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Tip = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMap$Tip)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMap$Tip = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Tip(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMap$Tip;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMap$Tip = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMap$Tip: 0
}, false, "scala.collection.immutable.LongMap$Tip", ScalaJS.data.scala_collection_immutable_LongMap, {
  scala_collection_immutable_LongMap$Tip: 1,
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
ScalaJS.c.scala_collection_immutable_LongMap$Tip.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMap$Tip;
//@ sourceMappingURL=LongMap$Tip.js.map
