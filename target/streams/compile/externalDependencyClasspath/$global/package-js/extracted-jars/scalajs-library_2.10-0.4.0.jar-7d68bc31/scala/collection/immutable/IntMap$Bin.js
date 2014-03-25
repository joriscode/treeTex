/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMap$Bin = (function() {
  ScalaJS.c.scala_collection_immutable_IntMap.call(this);
  this.prefix$6 = 0;
  this.mask$6 = 0;
  this.left$6 = null;
  this.right$6 = null
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype = new ScalaJS.inheritable.scala_collection_immutable_IntMap();
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMap$Bin;
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.prefix__I = (function() {
  return this.prefix$6
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.mask__I = (function() {
  return this.mask$6
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.left__Lscala_collection_immutable_IntMap = (function() {
  return this.left$6
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.right__Lscala_collection_immutable_IntMap = (function() {
  return this.right$6
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.bin__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap = (function(left, right) {
  if (((this.left__Lscala_collection_immutable_IntMap() === left) && (this.right__Lscala_collection_immutable_IntMap() === right))) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_IntMap$Bin().init___I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(this.prefix__I(), this.mask__I(), left, right)
  }
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.copy__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap$Bin = (function(prefix, mask, left, right) {
  return new ScalaJS.c.scala_collection_immutable_IntMap$Bin().init___I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(prefix, mask, left, right)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.copy$default$1__I = (function() {
  return this.prefix__I()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.copy$default$2__I = (function() {
  return this.mask__I()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.copy$default$3__Lscala_collection_immutable_IntMap = (function() {
  return this.left__Lscala_collection_immutable_IntMap()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.copy$default$4__Lscala_collection_immutable_IntMap = (function() {
  return this.right__Lscala_collection_immutable_IntMap()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productPrefix__T = (function() {
  return "Bin"
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productArity__I = (function() {
  return 4
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bI(this.prefix__I());
        break
      };
    case 1:
      {
        return ScalaJS.bI(this.mask__I());
        break
      };
    case 2:
      {
        return this.left__Lscala_collection_immutable_IntMap();
        break
      };
    case 3:
      {
        return this.right__Lscala_collection_immutable_IntMap();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.init___I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap = (function(prefix, mask, left, right) {
  this.prefix$6 = prefix;
  this.mask$6 = mask;
  this.left$6 = left;
  this.right$6 = right;
  ScalaJS.c.scala_collection_immutable_IntMap.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.copy__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__ = (function(prefix, mask, left, right) {
  return this.copy__I__I__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap$Bin(prefix, mask, left, right)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.bin__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__ = (function(left$2, right$2) {
  return this.bin__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap__Lscala_collection_immutable_IntMap(left$2, right$2)
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.right__ = (function() {
  return this.right__Lscala_collection_immutable_IntMap()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.left__ = (function() {
  return this.left__Lscala_collection_immutable_IntMap()
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.mask__ = (function() {
  return ScalaJS.bI(this.mask__I())
});
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.prefix__ = (function() {
  return ScalaJS.bI(this.prefix__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMap$Bin = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMap$Bin.prototype = ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype;
ScalaJS.is.scala_collection_immutable_IntMap$Bin = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMap$Bin)))
});
ScalaJS.as.scala_collection_immutable_IntMap$Bin = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMap$Bin(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMap$Bin")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMap$Bin = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMap$Bin)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMap$Bin = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMap$Bin(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMap$Bin;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMap$Bin = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMap$Bin: 0
}, false, "scala.collection.immutable.IntMap$Bin", ScalaJS.data.scala_collection_immutable_IntMap, {
  scala_collection_immutable_IntMap$Bin: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_immutable_IntMap: 1,
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
ScalaJS.c.scala_collection_immutable_IntMap$Bin.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMap$Bin;
//@ sourceMappingURL=IntMap$Bin.js.map
