/** @constructor */
ScalaJS.c.scala_xml_ProcInstr = (function() {
  ScalaJS.c.scala_xml_SpecialNode.call(this);
  this.target$7 = null;
  this.proctext$7 = null
});
ScalaJS.c.scala_xml_ProcInstr.prototype = new ScalaJS.inheritable.scala_xml_SpecialNode();
ScalaJS.c.scala_xml_ProcInstr.prototype.constructor = ScalaJS.c.scala_xml_ProcInstr;
ScalaJS.c.scala_xml_ProcInstr.prototype.target__T = (function() {
  return this.target$7
});
ScalaJS.c.scala_xml_ProcInstr.prototype.proctext__T = (function() {
  return this.proctext$7
});
ScalaJS.c.scala_xml_ProcInstr.prototype.doCollectNamespaces__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_ProcInstr.prototype.doTransform__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_ProcInstr.prototype.label__T = (function() {
  return "#PI"
});
ScalaJS.c.scala_xml_ProcInstr.prototype.text__T = (function() {
  return ""
});
ScalaJS.c.scala_xml_ProcInstr.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  var jsx$10 = sb;
  var jsx$9 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("<?%s%s?>"));
  var jsx$8 = ScalaJS.modules.scala_Predef();
  var jsx$7 = ScalaJS.data.java_lang_Object.getArrayOf();
  var jsx$6 = this.target__T();
  if (ScalaJS.anyRefEqEq(this.proctext__T(), "")) {
    var jsx$5 = ""
  } else {
    var jsx$5 = (" " + this.proctext__T())
  };
  var jsx$4 = [jsx$6, jsx$5];
  var jsx$3 = ScalaJS.makeNativeArrayWrapper(jsx$7, jsx$4);
  var jsx$2 = jsx$8.genericWrapArray__O__Lscala_collection_mutable_WrappedArray(jsx$3);
  var jsx$1 = jsx$9.format__Lscala_collection_Seq__T(jsx$2);
  return jsx$10.append__T__Lscala_collection_mutable_StringBuilder(jsx$1)
});
ScalaJS.c.scala_xml_ProcInstr.prototype.copy__T__T__Lscala_xml_ProcInstr = (function(target, proctext) {
  return new ScalaJS.c.scala_xml_ProcInstr().init___T__T(target, proctext)
});
ScalaJS.c.scala_xml_ProcInstr.prototype.copy$default$1__T = (function() {
  return this.target__T()
});
ScalaJS.c.scala_xml_ProcInstr.prototype.copy$default$2__T = (function() {
  return this.proctext__T()
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productPrefix__T = (function() {
  return "ProcInstr"
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.target__T();
        break
      };
    case 1:
      {
        return this.proctext__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_ProcInstr.prototype.init___T__T = (function(target, proctext) {
  this.target$7 = target;
  this.proctext$7 = proctext;
  ScalaJS.c.scala_xml_SpecialNode.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  if ((!ScalaJS.modules.scala_xml_Utility().isName__T__Z(target))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("" + target) + " must be an XML Name"))
  };
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z(proctext, "?>")) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("" + proctext) + " may not contain \"?>\""))
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T(target), "xml")) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("" + target) + " is reserved"))
  };
  return this
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_ProcInstr.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_ProcInstr.prototype.copy__T__T__ = (function(target, proctext) {
  return this.copy__T__T__Lscala_xml_ProcInstr(target, proctext)
});
ScalaJS.c.scala_xml_ProcInstr.prototype.proctext__ = (function() {
  return this.proctext__T()
});
ScalaJS.c.scala_xml_ProcInstr.prototype.target__ = (function() {
  return this.target__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_ProcInstr = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_ProcInstr.prototype = ScalaJS.c.scala_xml_ProcInstr.prototype;
ScalaJS.is.scala_xml_ProcInstr = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_ProcInstr)))
});
ScalaJS.as.scala_xml_ProcInstr = (function(obj) {
  if ((ScalaJS.is.scala_xml_ProcInstr(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.ProcInstr")
  }
});
ScalaJS.isArrayOf.scala_xml_ProcInstr = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_ProcInstr)))
});
ScalaJS.asArrayOf.scala_xml_ProcInstr = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_ProcInstr(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.ProcInstr;", depth)
  }
});
ScalaJS.data.scala_xml_ProcInstr = new ScalaJS.ClassTypeData({
  scala_xml_ProcInstr: 0
}, false, "scala.xml.ProcInstr", ScalaJS.data.scala_xml_SpecialNode, {
  scala_xml_ProcInstr: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_xml_SpecialNode: 1,
  scala_xml_pull_XMLEvent: 1,
  scala_xml_Node: 1,
  scala_xml_NodeSeq: 1,
  scala_xml_Equality: 1,
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
ScalaJS.c.scala_xml_ProcInstr.prototype.$classData = ScalaJS.data.scala_xml_ProcInstr;
//@ sourceMappingURL=ProcInstr.js.map
