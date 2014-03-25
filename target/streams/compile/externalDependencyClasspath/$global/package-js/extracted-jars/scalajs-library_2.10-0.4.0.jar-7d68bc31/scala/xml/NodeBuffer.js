/** @constructor */
ScalaJS.c.scala_xml_NodeBuffer = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuffer.call(this)
});
ScalaJS.c.scala_xml_NodeBuffer.prototype = new ScalaJS.inheritable.scala_collection_mutable_ArrayBuffer();
ScalaJS.c.scala_xml_NodeBuffer.prototype.constructor = ScalaJS.c.scala_xml_NodeBuffer;
ScalaJS.c.scala_xml_NodeBuffer.prototype.$$amp$plus__O__Lscala_xml_NodeBuffer = (function(o) {
  var x1 = o;
  matchEnd12: {
    matchEnd15: {
      if (ScalaJS.anyRefEqEq(null, x1)) {
        var jsx$1 = true;
        break matchEnd15
      };
      if (ScalaJS.is.scala_runtime_BoxedUnit(x1)) {
        var jsx$1 = true;
        break matchEnd15
      };
      var o20 = ScalaJS.modules.scala_xml_Text().unapply__O__Lscala_Option(x1);
      if ((!o20.isEmpty__Z())) {
        var p2 = ScalaJS.as.java_lang_String(o20.get__O());
        if (ScalaJS.anyRefEqEq("", p2)) {
          var jsx$1 = true;
          break matchEnd15
        }
      };
      var jsx$1 = false;
      break matchEnd15
    };
    if (jsx$1) {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd12
    };
    if (ScalaJS.is.scala_collection_Iterator(x1)) {
      var x7 = ScalaJS.as.scala_collection_Iterator(x1);
      x7.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(o) {
          return arg$outer.$$amp$plus__O__Lscala_xml_NodeBuffer(o)
        })
      })(this)));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd12
    };
    if (ScalaJS.is.scala_xml_Node(x1)) {
      var x8 = ScalaJS.as.scala_xml_Node(x1);
      ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer.call(this, x8);
      break matchEnd12
    };
    if (ScalaJS.is.scala_collection_Iterable(x1)) {
      var x9 = ScalaJS.as.scala_collection_Iterable(x1);
      this.$$amp$plus__O__Lscala_xml_NodeBuffer(x9.iterator__Lscala_collection_Iterator());
      break matchEnd12
    };
    if (ScalaJS.modules.scala_runtime_ScalaRunTime().isArray__O__I__Z(x1, 1)) {
      var x10 = x1;
      this.$$amp$plus__O__Lscala_xml_NodeBuffer(ScalaJS.modules.scala_Predef().genericArrayOps__O__Lscala_collection_mutable_ArrayOps(x10).iterator__Lscala_collection_Iterator());
      break matchEnd12
    };
    ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer.call(this, new ScalaJS.c.scala_xml_Atom().init___O(x1));
    break matchEnd12
  };
  return this
});
ScalaJS.c.scala_xml_NodeBuffer.prototype.$$amp$plus__O__ = (function(o) {
  return this.$$amp$plus__O__Lscala_xml_NodeBuffer(o)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_NodeBuffer = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_NodeBuffer.prototype = ScalaJS.c.scala_xml_NodeBuffer.prototype;
ScalaJS.is.scala_xml_NodeBuffer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_NodeBuffer)))
});
ScalaJS.as.scala_xml_NodeBuffer = (function(obj) {
  if ((ScalaJS.is.scala_xml_NodeBuffer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.NodeBuffer")
  }
});
ScalaJS.isArrayOf.scala_xml_NodeBuffer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_NodeBuffer)))
});
ScalaJS.asArrayOf.scala_xml_NodeBuffer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_NodeBuffer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.NodeBuffer;", depth)
  }
});
ScalaJS.data.scala_xml_NodeBuffer = new ScalaJS.ClassTypeData({
  scala_xml_NodeBuffer: 0
}, false, "scala.xml.NodeBuffer", ScalaJS.data.scala_collection_mutable_ArrayBuffer, {
  scala_xml_NodeBuffer: 1,
  scala_collection_mutable_ArrayBuffer: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_ResizableArray: 1,
  scala_collection_mutable_IndexedSeq: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_mutable_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
  scala_collection_IndexedSeqLike: 1,
  scala_collection_mutable_AbstractBuffer: 1,
  scala_collection_mutable_Buffer: 1,
  scala_collection_mutable_BufferLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_AbstractSeq: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_xml_NodeBuffer.prototype.$classData = ScalaJS.data.scala_xml_NodeBuffer;
//@ sourceMappingURL=NodeBuffer.js.map
