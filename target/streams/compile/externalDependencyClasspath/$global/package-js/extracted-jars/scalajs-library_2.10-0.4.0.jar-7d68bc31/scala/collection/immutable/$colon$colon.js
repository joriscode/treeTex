/** @constructor */
ScalaJS.c.scala_collection_immutable_$colon$colon = (function() {
  ScalaJS.c.scala_collection_immutable_List.call(this);
  this.scala$collection$immutable$$colon$colon$$hd$5 = null;
  this.tl$5 = null
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype = new ScalaJS.inheritable.scala_collection_immutable_List();
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.constructor = ScalaJS.c.scala_collection_immutable_$colon$colon;
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.hd$1__O = (function() {
  return this.scala$collection$immutable$$colon$colon$$hd$5
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tl$1__Lscala_collection_immutable_List = (function() {
  return this.tl$5
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.scala$collection$immutable$$colon$colon$$hd__O = (function() {
  return this.scala$collection$immutable$$colon$colon$$hd$5
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.scala$collection$immutable$$colon$colon$$hd$und$eq__p5__O__V = (function(x$1) {
  this.scala$collection$immutable$$colon$colon$$hd$5 = x$1
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tl__Lscala_collection_immutable_List = (function() {
  return this.tl$5
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tl$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.tl$5 = x$1
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.head__O = (function() {
  return this.scala$collection$immutable$$colon$colon$$hd__O()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tail__Lscala_collection_immutable_List = (function() {
  return this.tl__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.isEmpty__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.readObject__p5__Ljava_io_ObjectInputStream__V = (function(in$2) {
  var firstObject = in$2.readObject__O();
  this.scala$collection$immutable$$colon$colon$$hd$und$eq__p5__O__V(firstObject);
  ScalaJS.modules.scala_Predef().assert__Z__V((!ScalaJS.anyRefEqEq(this.scala$collection$immutable$$colon$colon$$hd__O(), ScalaJS.modules.scala_collection_immutable_ListSerializeEnd())));
  var current = this;
  while (true) {
    var x1 = in$2.readObject__O();
    matchEnd4: {
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_ListSerializeEnd(), x1)) {
        current.tl$und$eq__Lscala_collection_immutable_List__V(ScalaJS.modules.scala_collection_immutable_Nil());
        return undefined
      };
      var list = new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(x1, ScalaJS.modules.scala_collection_immutable_Nil());
      current.tl$und$eq__Lscala_collection_immutable_List__V(list);
      current = list;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    }
  }
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.writeObject__p5__Ljava_io_ObjectOutputStream__V = (function(out) {
  var xs = this;
  while ((!xs.isEmpty__Z())) {
    out.writeObject__O__V(xs.head__O());
    xs = ScalaJS.as.scala_collection_immutable_List(xs.tail__O())
  };
  out.writeObject__O__V(ScalaJS.modules.scala_collection_immutable_ListSerializeEnd())
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.copy__O__Lscala_collection_immutable_List__Lscala_collection_immutable_$colon$colon = (function(hd, tl) {
  return new ScalaJS.c.scala_collection_immutable_$colon$colon().init___O__Lscala_collection_immutable_List(hd, tl)
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.copy$default$1__O = (function() {
  return this.scala$collection$immutable$$colon$colon$$hd__O()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.copy$default$2__Lscala_collection_immutable_List = (function() {
  return this.tl__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.productPrefix__T = (function() {
  return "::"
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.hd$1__O();
        break
      };
    case 1:
      {
        return this.tl$1__Lscala_collection_immutable_List();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return this.tail__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.init___O__Lscala_collection_immutable_List = (function(hd, tl) {
  this.scala$collection$immutable$$colon$colon$$hd$5 = hd;
  this.tl$5 = tl;
  ScalaJS.c.scala_collection_immutable_List.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tl$1__ = (function() {
  return this.tl$1__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.hd$1__ = (function() {
  return this.hd$1__O()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.copy__O__Lscala_collection_immutable_List__ = (function(hd, tl) {
  return this.copy__O__Lscala_collection_immutable_List__Lscala_collection_immutable_$colon$colon(hd, tl)
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tl$und$eq__Lscala_collection_immutable_List__ = (function(x$1) {
  return ScalaJS.bV(this.tl$und$eq__Lscala_collection_immutable_List__V(x$1))
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.tl__ = (function() {
  return this.tl__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.scala$collection$immutable$$colon$colon$$hd__ = (function() {
  return this.scala$collection$immutable$$colon$colon$$hd__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_$colon$colon = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_$colon$colon.prototype = ScalaJS.c.scala_collection_immutable_$colon$colon.prototype;
ScalaJS.is.scala_collection_immutable_$colon$colon = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_$colon$colon)))
});
ScalaJS.as.scala_collection_immutable_$colon$colon = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_$colon$colon(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.$colon$colon")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_$colon$colon = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_$colon$colon)))
});
ScalaJS.asArrayOf.scala_collection_immutable_$colon$colon = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_$colon$colon(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.$colon$colon;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_$colon$colon = new ScalaJS.ClassTypeData({
  scala_collection_immutable_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", ScalaJS.data.scala_collection_immutable_List, {
  scala_collection_immutable_$colon$colon: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_List: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_Product: 1,
  scala_collection_immutable_LinearSeq: 1,
  scala_collection_LinearSeq: 1,
  scala_collection_LinearSeqLike: 1,
  scala_collection_immutable_Seq: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_immutable_$colon$colon.prototype.$classData = ScalaJS.data.scala_collection_immutable_$colon$colon;
//@ sourceMappingURL=$colon$colon.js.map
