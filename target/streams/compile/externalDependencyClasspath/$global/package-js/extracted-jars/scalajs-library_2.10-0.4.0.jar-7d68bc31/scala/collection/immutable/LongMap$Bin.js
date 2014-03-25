/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMap$Bin = (function() {
  ScalaJS.c.scala_collection_immutable_LongMap.call(this);
  this.prefix$6 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.mask$6 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.left$6 = null;
  this.right$6 = null
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype = new ScalaJS.inheritable.scala_collection_immutable_LongMap();
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMap$Bin;
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.prefix__J = (function() {
  return this.prefix$6
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.mask__J = (function() {
  return this.mask$6
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.left__Lscala_collection_immutable_LongMap = (function() {
  return this.left$6
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.right__Lscala_collection_immutable_LongMap = (function() {
  return this.right$6
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.bin__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap = (function(left, right) {
  if (((this.left__Lscala_collection_immutable_LongMap() === left) && (this.right__Lscala_collection_immutable_LongMap() === right))) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(this.prefix__J(), this.mask__J(), left, right)
  }
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.copy__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap$Bin = (function(prefix, mask, left, right) {
  return new ScalaJS.c.scala_collection_immutable_LongMap$Bin().init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(prefix, mask, left, right)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.copy$default$1__J = (function() {
  return this.prefix__J()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.copy$default$2__J = (function() {
  return this.mask__J()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.copy$default$3__Lscala_collection_immutable_LongMap = (function() {
  return this.left__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.copy$default$4__Lscala_collection_immutable_LongMap = (function() {
  return this.right__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productPrefix__T = (function() {
  return "Bin"
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productArity__I = (function() {
  return 4
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bJ(this.prefix__J());
        break
      };
    case 1:
      {
        return ScalaJS.bJ(this.mask__J());
        break
      };
    case 2:
      {
        return this.left__Lscala_collection_immutable_LongMap();
        break
      };
    case 3:
      {
        return this.right__Lscala_collection_immutable_LongMap();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.init___J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap = (function(prefix, mask, left, right) {
  this.prefix$6 = prefix;
  this.mask$6 = mask;
  this.left$6 = left;
  this.right$6 = right;
  ScalaJS.c.scala_collection_immutable_LongMap.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.copy__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__ = (function(prefix, mask, left, right) {
  return this.copy__J__J__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap$Bin(prefix, mask, left, right)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.bin__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__ = (function(left$2, right$2) {
  return this.bin__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap__Lscala_collection_immutable_LongMap(left$2, right$2)
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.right__ = (function() {
  return this.right__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.left__ = (function() {
  return this.left__Lscala_collection_immutable_LongMap()
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.mask__ = (function() {
  return ScalaJS.bJ(this.mask__J())
});
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.prefix__ = (function() {
  return ScalaJS.bJ(this.prefix__J())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMap$Bin = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMap$Bin.prototype = ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype;
ScalaJS.is.scala_collection_immutable_LongMap$Bin = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMap$Bin)))
});
ScalaJS.as.scala_collection_immutable_LongMap$Bin = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMap$Bin(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMap$Bin")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Bin = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMap$Bin)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMap$Bin = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMap$Bin(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMap$Bin;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMap$Bin = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMap$Bin: 0
}, false, "scala.collection.immutable.LongMap$Bin", ScalaJS.data.scala_collection_immutable_LongMap, {
  scala_collection_immutable_LongMap$Bin: 1,
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
ScalaJS.c.scala_collection_immutable_LongMap$Bin.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMap$Bin;
//@ sourceMappingURL=LongMap$Bin.js.map
